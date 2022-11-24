import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  flexDirection: "column",
  fontFamily: "Oswald",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: theme.fontSize.large,
  lineHeight: "47px",
  letterSpacing: "1.15556px",
  color: theme.colors.titleDark,
  marginBottom: 18,
}));
