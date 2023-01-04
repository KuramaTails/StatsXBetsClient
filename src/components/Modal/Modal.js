import React, { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import AveragesModal from "./AveragesModal.js";
import MatchStats from "./MatchStats.js";

function ModalComponent({ state, show, hide, matchId, socket }) {
  const [data, setData] = useState();
  const [currentTab, setTab] = React.useState(0);
  const [currentTeam, setCurrentTeam] = useState(0); // 0 = home team, 1 = away team
  const statsTabChange = (event, newStats) => {
    setTab(newStats);
  };
  const teamTabChange = (event, newTeam) => {
    setCurrentTeam(newTeam);
  };
  useEffect(() => {
    socket.emit("requestStats", matchId);
    socket.on("responseStats", (res) => {
      setData(res);
    });
  }, [socket, matchId]);
  if (data) {
    let infoMatch = data.general;
    let header = data.header;
    let home = infoMatch.homeTeam;
    let away = infoMatch.awayTeam;
    let score = header.status.scoreStr;
    let teamColors = data.general.teamColors;
    let statsArr = [];
    let titlesArr = [];
    let stats = data.content.stats.stats;
    if (Object.keys(stats).length < "7") {
      return (
        <AveragesModal
          data={{ stats, home, score, away, teamColors, statsArr, titlesArr }}
          modalUtils={{ state, hide }}
          currentTab={currentTab}
          currentTeam={currentTeam}
          setTab={statsTabChange}
          setTeam={teamTabChange}
        />
      );
    } else {
      return (
        <MatchStats
          data={{ stats, home, score, away, teamColors, statsArr, titlesArr }}
          modalUtils={{ state, hide }}
          currentTab={currentTab}
          setTab={statsTabChange}
        />
      );
    }
  }
  return <LinearProgress />;
}

export default ModalComponent;
