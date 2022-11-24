import { LoadingButtonProps } from "@mui/lab";
import React from "react";

import { StyledButton } from "./styles";

export const Button = (props: LoadingButtonProps) => (
  <StyledButton variant="contained" type="button" {...props} />
);
