import React, { useEffect, useState } from "react";
import { emptyErrorEvent, mailRegExp, STRINGS } from "Utils/constants";

import {
  ButtonContainer,
  Container,
  ErrorMessage,
  SubContainer,
  Title,
} from "./styles";
import { loginReq } from "Api/apiCalls";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "Redux/slices/authSlice";
import Stack from "@mui/material/Stack";
import { Input } from "Components/Input/Input";
import { Button } from "Components/Button/Button";
import { Navigate, useNavigate } from "react-router-dom";
import { RootState } from "Redux/store";

const labels: {
  key: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
}[][] = [
  [
    { key: "email", label: STRINGS.email },
    { key: "password", label: STRINGS.password, type: "password" },
  ],
];

const LoginView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogged = !!useSelector((store: RootState) => store.auth.token);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const LoginSchema = yup
    .object()
    .shape({
      email: yup.string().matches(mailRegExp, STRINGS.errorEmail),
      password: yup.string().min(6, STRINGS.errorPassword),
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

  useEffect(() => {
    if (errors?.[emptyErrorEvent]?.message) {
      setError(errors[emptyErrorEvent].message.toString() || "");
      return;
    }
    setError(
      Object.values(errors)
        .map((value) => value?.message)
        .join("\n")
    );
  }, [errors]);

  const login = async (params: { email?: string; password?: string }) => {
    setIsLoading(true);
    let { email, password } = params;
    const newParams = {
      email: !!email ? email : undefined,
      password: !!password ? password : undefined,
    };
    setError("");
    try {
      const { data, status } = await loginReq(newParams);
      const token = data.tokenID;
      if (status === 200 && token) {
        dispatch(setToken(token));
        navigate("/");
      }
    } catch (e: any) {
      setError(e?.data?.error || "");
    }
    setIsLoading(false);
  };

  if (userLogged) {
    return <Navigate to="/" />;
  }
  return (
    <Container>
      <SubContainer>
        <Title>{STRINGS.sayHello}</Title>
        <form onSubmit={handleSubmit(login)}>
          {labels.map((inputs, index) => (
            <Stack
              key={`${index}`}
              direction="column"
              spacing={2}
              marginBottom={2}
            >
              {inputs.map(({ key, label, type }) => (
                <Input
                  key={label}
                  id={key}
                  label={label}
                  error={!!errors?.[emptyErrorEvent]?.message || !!errors[key]}
                  type={type}
                  onChange={(e) => setValue(key, e.target.value)}
                />
              ))}
            </Stack>
          ))}
          {!!error && <ErrorMessage>{`${error}`}</ErrorMessage>}
          <ButtonContainer style={{ justifyContent: "center" }}>
            <Button type="submit" loading={isLoading}>
              {STRINGS.login}
            </Button>
          </ButtonContainer>
        </form>
      </SubContainer>
    </Container>
  );
};

export default LoginView;
