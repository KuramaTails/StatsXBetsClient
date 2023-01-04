import { Avatar, Box, Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ModalComponent from "../Modal/Modal";
import * as styles from "./styles";

const FootballMatch = ({ matchInfo, socket }) => {
  const [modalState, showModal] = useState(undefined);
  const [isLive, setIsLive] = useState(false);
  const [matchData, setMatchData] = useState({});
  const startTime = new Date(matchInfo.status.utcTime);

  useEffect(() => {
    setMatchData(matchInfo);
  }, [matchInfo]);

  useEffect(() => {
    if (
      (!matchInfo.status.started || !matchInfo.status.finished) &&
      new Date() > startTime
    ) {
      setIsLive(true);
    }
  }, [matchInfo, startTime]);

  useEffect(() => {
    if (isLive) {
      socket.emit("requestLiveUpdate", matchInfo.id);
      socket.on("responseLiveUpdate", (res) => {
        setMatchData(res);
      });
      const timer = setInterval(() => {
        // Send request to server to get new data
        socket.emit("requestLiveUpdate", matchInfo.id);
        socket.on("responseLiveUpdate", (res) => {
          setMatchData(res);
        });
      }, 60 * 1000);
      return () => clearInterval(timer);
    }
  }, [matchInfo, socket,isLive]);

  let homeTeamName;
  let awayTeamName;
  let scoreboard;
  let status;
  if (!isLive) {
    homeTeamName = matchInfo.home.name;
    awayTeamName = matchInfo.away.name;
    if (matchInfo.status.reason) {
      scoreboard = matchInfo.status.reason.long;
      status = matchInfo.status.scoreStr;
    } else {
      var month = startTime.getUTCMonth() + 1;
      var day = startTime.getUTCDate();
      var year = startTime.getUTCFullYear();
      var hours = startTime.getHours();
      var minutes = startTime.getMinutes();
      homeTeamName = matchInfo.home.name;
      awayTeamName = matchInfo.away.name;
      scoreboard = day + "/" + month + "/" + year;
      status = hours + ":" + (minutes === 0 ? "00" : minutes);
    }
  } else {
    if (matchData.general) {
      homeTeamName = matchData.general.homeTeam.name;
      awayTeamName = matchData.general.awayTeam.name;
      scoreboard = matchData.header.status.liveTime.long;
      status = matchData.header.status.scoreStr;
    } else {
      homeTeamName = matchData.home.name;
      awayTeamName = matchData.away.name;
      scoreboard = day + "/" + month + "/" + year;
      status = hours + ":" + (minutes === 0 ? "00" : minutes);
    }
  }

  return (
    <Box
      sx={styles.matchContainer}
      id={matchData.id}
      onClick={() => modalState === undefined && showModal(true)}
    >
      <Box sx={styles.logoContainer}>
        <Box sx={styles.wrapperAvatar}>
          <Avatar
            variant="rounded"
            alt={homeTeamName}
            src={
              "/imgs/Serie_A/" + String(homeTeamName).replace(" ", "") + ".svg"
            }
            sx={styles.wrapperLogo}
            imgProps={{
              sx: styles.logo,
            }}
          ></Avatar>
        </Box>
      </Box>
      <Box sx={styles.matchInfo}>
        <Typography
          sx={{ width: 1 / 3, "&:hover": { color: "tertiary.text" } }}
        >
          {homeTeamName}
        </Typography>
        <Container sx={{ width: 1 / 3, fontSize: "1.5rem" }}>
          <Typography>{scoreboard}</Typography>
          <Typography>{status}</Typography>
        </Container>
        <Typography sx={{ width: 1 / 3 }}>{awayTeamName}</Typography>
      </Box>
      <Box sx={styles.logoContainer}>
        <Box sx={styles.wrapperAvatar}>
          <Avatar
            variant="rounded"
            alt={awayTeamName}
            src={
              "/imgs/Serie_A/" + String(awayTeamName).replace(" ", "") + ".svg"
            }
            sx={styles.wrapperLogo}
            imgProps={{
              sx: styles.logo,
            }}
          ></Avatar>
        </Box>
      </Box>
      {modalState !== undefined && (
        <ModalComponent
          state={modalState}
          show={() => showModal(true)}
          hide={() => showModal(undefined)}
          matchId={matchInfo.id}
          socket={socket}
        />
      )}
    </Box>
  );
};

export default FootballMatch;
