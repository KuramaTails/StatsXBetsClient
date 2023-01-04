import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Tab, Tabs } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import * as styles from "./styles.js";

function AveragesModal({
  data,
  modalUtils,
  currentTab,
  currentTeam,
  setTab,
  setTeam,
}) {
  const { stats, home, score, away, teamColors, statsArr, titlesArr } = data;
  const { state, hide } = modalUtils;
  titlesArr.push({ home: [], away: [] });
  stats.map((statsWrapper, teamIndex) => {
    let venue = teamIndex === 0 ? "home" : "away";
    statsArr.push({ home: [], away: [] });
    Object.keys(statsWrapper).map((outerStatsKey) => {
      if (outerStatsKey !== "count") {
        let catTitle = outerStatsKey;
        titlesArr[0][venue].push(
          <Tab
            disabled={currentTab === titlesArr[0][venue].length}
            value={titlesArr[0][venue].length}
            key={titlesArr[0][venue].length}
            label={catTitle}
            sx={styles.tabTitle}
          ></Tab>
        );
        let innerStatsWrapper = [];

        Object.keys(statsWrapper[outerStatsKey]).map((innerStatsKey) => {
          let statTitle = innerStatsKey;
          let values = statsWrapper[outerStatsKey][innerStatsKey];
          if (values[0] !== null && values[1] !== null) {
            let sum = parseFloat(values[0]) + parseFloat(values[1]);
            let homeValue = (parseFloat(values[0]) * 100) / sum;
            let awayValue = (parseFloat(values[1]) * 100) / sum;
            innerStatsWrapper.push(
              <Box
                value={innerStatsWrapper.length}
                index={innerStatsWrapper.length}
                key={innerStatsWrapper.length}
                sx={styles.categoryWrapper}
              >
                <Typography variant="div" sx={styles.categoryTitle}>
                  <Typography>{values[0]}</Typography>
                  <Typography>{statTitle}</Typography>
                  <Typography>{values[1]}</Typography>
                </Typography>
                <Typography variant="div" sx={styles.barsWrapper}>
                  <LinearProgress
                    variant="determinate"
                    sx={[
                      styles.barLeft,
                      {
                        "&>*": {
                          bgcolor: teamColors.home + "!important",
                        },
                      },
                    ]}
                    color="primary"
                    value={homeValue}
                  />
                  <LinearProgress
                    variant="determinate"
                    sx={[
                      styles.barRight,
                      {
                        "&>*": {
                          bgcolor: teamColors.away + "!important",
                        },
                      },
                    ]}
                    value={awayValue}
                  />
                </Typography>
              </Box>
            );
          }
        });
        let outerStatsWrapper = (
          <Box
            value={statsArr[0][venue].length}
            index={statsArr[0][venue].length}
            key={statsArr[0][venue].length}
            sx={[
              styles.categoryContent,
              {
                display:
                  ((currentTeam !== venue) && (currentTab !== statsArr[0][venue].length)) && "none",
                "&>*": {
                  height: 1 / innerStatsWrapper.length,
                },
              },
            ]}
          >
            {innerStatsWrapper}
          </Box>
        );
        statsArr[0][venue].push(outerStatsWrapper);
      }
    });
  });
  return (
    <Modal
      open={state}
      onClose={hide}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.modalWrapper}>
        <Box id="modal-modal-title" sx={styles.modalTitle}>
          <Typography sx={{ width: 1 / 3 }}>{home.name}</Typography>
          <Typography sx={{ width: 1 / 3 }}>{score}</Typography>
          <Typography sx={{ width: 1 / 3 }}>{away.name}</Typography>
        </Box>
        <Box id="modal-modal-description" sx={styles.modalContent}>
          {Object.keys(stats).length < "7" && (
            <Tabs
              textColor="secondary"
              variant="fullWidth"
              value={currentTeam}
              sx={styles.modalTabs}
              onChange={setTeam}
              aria-label="basic tabs example"
            >
              {Object.keys(titlesArr[0]).map((team, index) => (
                <Tab
                  disabled={currentTeam === index}
                  value={index}
                  key={team}
                  label={team}
                  sx={styles.tabTitle}
                ></Tab>
              ))}
            </Tabs>
          )}
          <Tabs
            textColor="secondary"
            variant="fullWidth"
            value={currentTab}
            sx={styles.modalTabs}
            onChange={setTab}
            aria-label="basic tabs example"
          >
            {titlesArr[0][currentTeam === 0 ? "home" : "away"]}
          </Tabs>
          {statsArr[0][currentTeam === 0 ? "home" : "away"]}
        </Box>
        <Box id="modal-modal-footer" sx={styles.modalFooter}>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              "&:hover": {
                bgcolor: "tertiary.main",
              },
            }}
            onClick={() => hide()}
          >
            <CloseIcon />
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default AveragesModal;
