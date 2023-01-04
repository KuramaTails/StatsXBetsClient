export const AppBar = {
  width: 1,
  height: "12vh",
  position: "fixed",
  bgcolor: "secondary.main",
  color: "secondary.text",
  boxShadow: "inset 0px 10px 10px rgba(0, 0, 0, 0.25)",
  filter: "drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25))",
};

export const ToolBar = {
  width: 1,
  height: 1,
  alignItems: "center",
  justifyContent: "space-between",
  "&>*" : {
    color: "secondary.text",
  }
};

export const navbarButton = {
  color: "secondary.text",
};

export const navbarText = {
  fontSize: "3rem",
};
