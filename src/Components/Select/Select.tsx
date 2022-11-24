import React from "react";

import {
  Select as SelectMUI,
  MenuItem,
  SelectProps,
  FormControl,
  InputLabel,
} from "@mui/material";

export type ArrayOfElements = { value: string; label: string }[];
interface ISelect extends SelectProps {
  arrayOfElements: ArrayOfElements;
}
export const Select = ({ arrayOfElements, ...props }: ISelect) => (
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>

    <SelectMUI id="demo-simple-select" {...props}>
      {arrayOfElements.map(({ label, value }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </SelectMUI>
  </FormControl>
);
