import { Backdrop, styled } from "@mui/material";

export const BackdropContainer = styled(Backdrop)(({ theme }) => ({
  backgroundColor: theme.colors.backdropBackground,
}));

export const CheckboxContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontFamily: theme.fontFamily.inter,
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: theme.fontSize.mediumSmall,
  letterSpacing: 0.526191,
  color: theme.colors.titleDark,
}));
export const CloseContainer = styled("div")(() => ({
  width: 45,
  height: 45,
  cursor: "pointer",
  marginTop: -10,
}));
export const ColumnInfoContainer = styled("div")(() => ({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  paddingRight: 50,
}));
export const ButtonContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: 20,
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
export const Description = styled("div")(({ theme }) => ({
  height: 45,
  backgroundColor: theme.colors.purple,
  alignItems: "center",
  display: "flex",
  fontFamily: theme.fontFamily.inter,
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: theme.fontSize.medium,
  lineHeight: 19,
  letterSpacing: 1.25,
  color: theme.colors.white,
  paddingLeft: 14,
  marginTop: 16,
}));
export const InfoContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  overflow: "scroll",
}));

export const ModalContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.colors.white,
  display: "flex",
  width: "80%",
  height: "90%",
  outlineColor: "transparent",
  boxShadow: `0px 0px 4px ${theme.colors.shadow}`,
  borderRadius: 3,
}));

export const ModalSubContainer = styled("div")(() => ({
  display: "flex",
  width: "100%",
  padding: 32,
  paddingRight: 20,
  flexDirection: "column",
}));

export const Title = styled("div")(({ theme }) => ({
  fontFamily: theme.fontFamily.oswald,
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: theme.fontSize.largeLarge,
  letterSpacing: 1.15556,
  color: theme.colors.titleDark,
}));
