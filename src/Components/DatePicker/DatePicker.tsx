import React, { JSXElementConstructor, ReactElement, useState } from 'react';

import { TextFieldProps } from '@mui/material';
import {
  DatePicker as DatePickerMUI,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

interface DatePickerProps {
  renderInput: (
    props: TextFieldProps,
  ) => ReactElement<any, string | JSXElementConstructor<any>>;
  label: string;
  onChange: (value: dayjs.Dayjs | null) => void;
}
export const DatePicker = ({
  renderInput,
  label,
  onChange,
}: DatePickerProps) => {
  const [value, setValue] = useState<Dayjs | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerMUI
        label={label}
        value={value}
        onChange={v => {
          setValue(v);
          onChange(v);
        }}
        renderInput={renderInput}
      />
    </LocalizationProvider>
  );
};
