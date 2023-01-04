import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Match from "../Match/Match";
import { Box, LinearProgress } from "@mui/material";
import * as styles from "./styles";

function Round({ data, currentRound, setRound, socket }) {
  if (data) {
    return (
      <Fragment>
        <Navbar currentRound={currentRound} changeRound={setRound} />
        <Box component="section" sx={styles.Round}>
          {data.map((match, index) => {
            return <Match matchInfo={match} key={index} socket={socket} />;
          })}
        </Box>
      </Fragment>
    );
  } else {
    <LinearProgress />;
  }
}

export default Round;
