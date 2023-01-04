import Box from "@mui/material/Box";
import React, { useEffect, useRef, useState } from "react";
import Round from "./Round/Round.js";

function Main({ socket }) {
  const [round, setRound] = useState(undefined);
  const [data, setData] = useState(undefined);
  const prevRound = useRef(round);
  useEffect(() => {
    if (prevRound.current !== round || round===undefined) {
      socket.emit("requestMatches", round);
      socket.on("responseMatches", (res) => {
        setData(res.selectedMatches);
        prevRound.current = res.selectedRound
        if (round === undefined) {
          setRound(res.selectedRound);
        }
      });
    }
  }, [socket, round]);
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "primary.main",
      }}
    >
      <Round
        data={data}
        currentRound={round}
        setRound={setRound}
        socket={socket}
      />
    </Box>
  );
}

export default Main;
