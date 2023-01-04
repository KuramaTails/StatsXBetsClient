import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Tab, Tabs } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import * as styles from "./styles.js";

function MatchStats({ data, modalUtils, currentTab, setTab }) {
  const { stats, home, score, away, teamColors, statsArr, titlesArr } = data;
  const { state, hide } = modalUtils;

  for (const category of stats) {
    let catTitle = category.title;
    titlesArr.push(
      <Tab
        disabled={currentTab === titlesArr.length}
        value={titlesArr.length}
        key={titlesArr.length}
        label={catTitle}
        sx={styles.tabTitle}
      ></Tab>
    );
    let catArr = [];
    for (const stat of category.stats) {
      let statTitle = stat.title;
      let values = stat.stats;
      if (values[0] !== null && values[1] !== null) {
        let sum = parseFloat(values[0]) + parseFloat(values[1]);
        let homeValue = (parseFloat(values[0]) * 100) / sum;
        let awayValue = (parseFloat(values[1]) * 100) / sum;
        catArr.push(
          <Box
            value={catArr.length}
            index={catArr.length}
            key={catArr.length}
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
    }
    let divCat = (
      <Box
        value={statsArr.length}
        index={statsArr.length}
        key={statsArr.length}
        sx={[
          styles.categoryContent,
          {
            display: currentTab !== statsArr.length && "none",
            "&>*": {
              height: 1 / catArr.length,
            },
          },
        ]}
      >
        {catArr}
      </Box>
    );
    statsArr.push(divCat);
  }
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
          <Tabs
            textColor="secondary"
            variant="fullWidth"
            value={currentTab}
            sx={styles.modalTabs}
            onChange={setTab}
            aria-label="basic tabs example"
          >
            {titlesArr}
          </Tabs>
          {statsArr}
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

export default MatchStats;
