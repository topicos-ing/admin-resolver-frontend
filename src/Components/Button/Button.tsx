import React from "react";

import { ButtonProps } from "@mui/material/Button";

import { StyledButton } from "./styles";

export const Button = (props: ButtonProps) => (
  <StyledButton variant="contained" type="button" {...props} />
);
