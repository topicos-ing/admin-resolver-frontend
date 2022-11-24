import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  backgroundColor: theme.colors.background,
  display: "flex",
  width: "100vw",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
}));

export const SubContainer = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.colors.white,
  flexDirection: "column",
  padding: "60px 100px 60px 100px",
  width: "30%",
}));
export const Title = styled("div")(({ theme }) => ({
  fontFamily: "Oswald",
  fontStyle: "normal",
  fontWeight: 600,
  alignSelf: "center",
  fontSize: theme.fontSize.largeLarge,
  lineHeight: "47px",
  letterSpacing: "1.15556px",
  color: theme.colors.titleDark,
  marginBottom: 18,
}));

export const ButtonContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 40,
}));

export const ErrorMessage = styled("div")(({ theme }) => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: theme.fontSize.medium,
  lineHeight: "19px",
  letterSpacing: "1.11111px",
  color: theme.colors.error,
  margin: "16px 0 12px 0",
  whiteSpace: "pre-wrap",
}));
