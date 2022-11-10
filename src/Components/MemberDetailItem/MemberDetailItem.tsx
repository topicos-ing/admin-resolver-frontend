import React from "react";

import { Stack } from "@mui/material";

import { Input } from "../Input/Input";
import { Title, Line, InputLabel, Container } from "./styles";

const MemberDetailItem = ({
  title,
  data,
  preInputs,
  postInputs,
}: {
  title: string;
  data: {
    label: string;
    value: string;
    setValue: (newValue: string) => void;
  }[];
  preInputs?: JSX.Element;
  postInputs?: JSX.Element;
}) => (
  <Container>
    <Title>{title}</Title>
    <Line />
    <Stack spacing={2} marginTop={preInputs ? 2 : 4}>
      {preInputs}
      {data.map(({ label, value, setValue }) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <InputLabel>{label}</InputLabel>
          <Input onChange={(e) => setValue(e.target.value)} value={value} />
        </div>
      ))}
      {postInputs}
    </Stack>
  </Container>
);

export default MemberDetailItem;
