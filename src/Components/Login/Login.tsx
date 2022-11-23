/* eslint-disable react/no-array-index-key */
import React, { useMemo } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { Stack } from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { emptyErrorEvent, mailRegExp, STRINGS } from "../../Utils/constants";
import { Button } from "../Button/Button";
import { DatePicker } from "../DatePicker/DatePicker";
import { Input } from "../Input/Input";
import { ErrorMessage, ButtonContainer } from "./styles";

const labels: {
  key: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
}[][] = [
  [
    { key: "email", label: STRINGS.email },
    { key: "password", label: STRINGS.password },
  ],
];

const Login = ({
  onLogin,
  onClear,
  hasLoginData,
}: {
  onLogin: SubmitHandler<FieldValues>;
  onClear: () => void;
  hasLoginData: boolean;
}) => {
  const LoginSchema = yup
    .object()
    .shape({
      email: yup.string().matches(mailRegExp, STRINGS.errorEmail),
      password: yup.string(),
    })
    .test((obj) => {
      const objKeys = Object.keys(obj);
      if (objKeys.length && objKeys.filter((key) => !!obj[key]).length > 0) {
        return true;
      }
      return new yup.ValidationError(
        STRINGS.emptyUserData,
        null,
        emptyErrorEvent
      );
    });
  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const hasErrors = useMemo(() => {
    if (errors?.[emptyErrorEvent]?.message) {
      return errors[emptyErrorEvent].message;
    }
    return Object.values(errors)
      .map((value) => value?.message)
      .join("\n");
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(onLogin)}>
      {labels.map((inputs, index) => (
        <Stack key={`${index}`} direction="column" spacing={2} marginBottom={2}>
          {inputs.map(({ key, label, type }) =>
            key === "password" ? (
              <Input
              key={label}
              id={key}
              label="Password"
              type="password"
              error={!!errors?.[emptyErrorEvent]?.message || !!errors[key]}
              onChange={(e) => setValue(key, e.target.value)}
            />
            ) : (
              <Input
                key={label}
                id={key}
                label={label}
                error={!!errors?.[emptyErrorEvent]?.message || !!errors[key]}
                type={type}
                onChange={(e) => setValue(key, e.target.value)}
              />
            )
          )}
        </Stack>
      ))}
      {!!hasErrors && <ErrorMessage>{`${hasErrors}`}</ErrorMessage>}
      <ButtonContainer style={{ justifyContent: "space-between" }}>
        <ButtonContainer>
          <Button type="submit">{STRINGS.login}</Button>
        </ButtonContainer>
      </ButtonContainer>
    </form>
  );
};

export default Login;
