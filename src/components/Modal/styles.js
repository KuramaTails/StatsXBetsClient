export const modalWrapper = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 0.5,
  height: 0.75,
  bgcolor: "tertiary.main",
  boxShadow: 24,
};

export const modalTitle = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  lexWrap: "nowrap",
  height: 1 / 10,
  width: 1,
  justifyItems: "center",
  alignItems: "center",
  textAlign: "center",
  bgcolor: "primary.main",
  color: "primary.text",
  boxShadow: 24,
};

export const modalContent = {
  display: "flex",
  justifyContent: "start",
  flexDirection: "column",
  lexWrap: "nowrap",
  height: 8 / 10,
  width: 1,
  justifyItems: "center",
  alignItems: "center",
  textAlign: "center",
  boxShadow: "inset 0px -10px 10px 0px rgba(0, 0, 0, 0.25)",
};

export const modalFooter = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row-reverse",
  lexWrap: "nowrap",
  height: 1 / 10,
  width: 1,
  justifyItems: "center",
  alignItems: "center",
  textAlign: "center",
  bgcolor: "primary.main",
  color: "primary.text",
  px: 3,
};

export const modalTabs = {
  display: "flex",
  width: 1,
  height: 1 / 10,
  alignItems: "center",
  boxShadow: 24,
  color:"primary.main"
};

export const tabTitle = {
  p: 0,
  height: 1,
  width: 1,
  bgcolor: "secondary.main",
  color: "secondary.text",
  transition: "all 0.25s linear",
  "&:hover": {
    bgcolor: "tertiary.main",
    color: "tertiary.text",
  },
  "&.MuiTab-root.Mui-selected": {
    bgcolor: "primary.main",
    color: "primary.text",
  },
};

export const categoryWrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: 1,
  px: 3,
};

export const categoryTitle = {
  width: 1,
  display: "flex",
  justifyContent: "space-between",
  color: "primary.text",
};

export const categoryContent = {
    width: 1,
    height: 1,
    my: 3,
  }

export const barsWrapper = {
  width: 1,
  height: "1vh",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  "&>*": {
    height: "1vh!important",
  },
};

export const barLeft = {
  width: 1 / 2,
  transform: "rotate(180deg)",
  borderRadius: "0px 15px 15px 0px",
  "&>*": {
    height: 1,
    borderRadius: "0px 15px 15px 0px",
  },
};

export const barRight = {
    width: 1 / 2,
    borderRadius: "0px 15px 15px 0px",
    "&>*": {
      height:1,
      borderRadius: "0px 15px 15px 0px",
    },
  }