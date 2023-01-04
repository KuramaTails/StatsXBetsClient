import { createTheme } from "@mui/material/styles";

const theme = {
  default: createTheme({
    palette: {
      primary: {
        main: "#293C56",
        text: "#EDF1F8",
      },
      secondary: {
        main: "#6C7C93",
        text: "#EDF1F8",
      },
      tertiary: {
        main: "#334B6C",
        text: "#EDF1F8",
      },
    },
    components: {
      MuiTabs: {
        styleOverrides: {
          scroller: {
            height: "100%",
          },
          flexContainer: {
            height: "100%",
          },
          indicator: {
            backgroundColor: "#EDF1F8",
            height: 1,
          },
        },
      },
    },
  }),
  bundesLiga: createTheme({
    palette: {
      primary: {
        main: "#56292D",
        text: "#EDF1F8",
      },
      secondary: {
        main: "#936C6F",
        text: "#EDF1F8",
      },
      tertiary: {
        main: "#673236",
        text: "#EDF1F8",
      },
    },
    components: {
      MuiTabs: {
        styleOverrides: {
          scroller: {
            height: "100%",
          },
          flexContainer: {
            height: "100%",
          },
          indicator: {
            backgroundColor: "#EDF1F8",
            height: 1,
          },
        },
      },
    },
  }),
  laLiga: createTheme({
    palette: {
      primary: {
        main: "#294756",
        text: "#EDF1F8",
      },
      secondary: {
        main: "#6C8693",
        text: "#EDF1F8",
      },
      tertiary: {
        main: "#325567",
        text: "#EDF1F8",
      },
    },
    components: {
      MuiTabs: {
        styleOverrides: {
          scroller: {
            height: "100%",
          },
          flexContainer: {
            height: "100%",
          },
          indicator: {
            backgroundColor: "#EDF1F8",
            height: 1,
          },
        },
      },
    },
  }),
  ligueOne: createTheme({
    palette: {
      primary: {
        main: "#293856",
        text: "#EDF1F8",
      },
      secondary: {
        main: "#6C7993",
        text: "#EDF1F8",
      },
      tertiary: {
        main: "#324467",
        text: "#EDF1F8",
      },
    },
    components: {
      MuiTabs: {
        styleOverrides: {
          scroller: {
            height: "100%",
          },
          flexContainer: {
            height: "100%",
          },
          indicator: {
            backgroundColor: "#EDF1F8",
            height: 1,
          },
        },
      },
    },
  }),
  premierLeague: createTheme({
    palette: {
      primary: {
        main: "#472956",
        text: "#EDF1F8",
      },
      secondary: {
        main: "#866C93",
        text: "#EDF1F8",
      },
      tertiary: {
        main: "#553267",
        text: "#EDF1F8",
      },
    },
    components: {
      MuiTabs: {
        styleOverrides: {
          scroller: {
            height: "100%",
          },
          flexContainer: {
            height: "100%",
          },
          indicator: {
            backgroundColor: "#EDF1F8",
            height: 1,
          },
        },
      },
    },
  }),
  serieA: createTheme({
    palette: {
      primary: {
        main: "#293C56",
        text: "#EDF1F8",
      },
      secondary: {
        main: "#6C7C93",
        text: "#EDF1F8",
      },
      tertiary: {
        main: "#334B6C",
        text: "#EDF1F8",
      },
    },
    components: {
      MuiTabs: {
        styleOverrides: {
          scroller: {
            height: "100%",
          },
          flexContainer: {
            height: "100%",
          },
          indicator: {
            backgroundColor: "#EDF1F8",
            height: 1,
          },
        },
      },
    },
  }),
};

export default theme;
