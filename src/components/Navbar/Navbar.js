import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Toolbar, Typography, AppBar, IconButton } from "@mui/material";
import * as styles from "./styles";

function Navbar({ currentRound, changeRound }) {
  return (
    <AppBar
      sx={styles.AppBar}
    >
      <Toolbar
        sx={styles.ToolBar}
      >
        <IconButton
          disableFocusRipple
          disableRipple
          onClick={() => currentRound > 1 && changeRound(currentRound - 1)}
          sx={styles.navbarButton}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Typography sx={styles.navbarText}>
          Giornata {+currentRound}
        </Typography>

        <IconButton
          disableFocusRipple
          disableRipple
          onClick={() => currentRound < 38 && changeRound(currentRound + 1)}
          sx={styles.navbarButton}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
