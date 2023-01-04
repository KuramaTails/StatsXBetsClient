export const matchContainer = {
  display: "flex",
  justifyContent: "space-between",
  mb: "3vw",
  height: "12vh",
  width: "75vw",
  fontSize: "2.5vh",
  filter: "drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25))",
  flexDirection: "row",
  alignItems: "center",
  bgcolor: "secondary.main",
  color: "secondary.text",
  transition: "background .5s ease",
  "&:hover": {
    bgcolor: "tertiary.main",
    cursor: "pointer",
  },
};

export const logoContainer = {
  display: "flex",
  height: 1,
  width: 1 / 4,
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
};

export const matchInfo = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  flexWrap: "nowrap",
  height: 1,
  width: 1,
  justifyItems: "center",
  alignItems: "center",
  textAlign: "center",
  color: "secondary.text",
  transition: "background .5s ease",
  "&:hover": {
    color: "tertiary.text",
  },
  "&>*": {
    fontSize: "1.5rem",
  },
};

export const wrapperAvatar = {
  display: "flex",
  height: 0.9,
  aspectRatio: "1",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "primary.main",
};

export const wrapperLogo = {
  height: 0.6,
  width: 0.6,
  objectFit: "scale-down",
};


export const logo = {
  height: 1,
  objectFit: "scale-down",
};
