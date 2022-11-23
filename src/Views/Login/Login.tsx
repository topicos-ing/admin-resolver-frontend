import React, { useState } from "react";
import { STRINGS } from "Utils/constants";
import Login from "../../Components/Login/Login";
import { useNavigate } from "react-router-dom";

import {
  Container,
  SubContainer,
  TopSubContainer,
  Title
} from "./styles";
import { loginReq } from "Api/apiCalls";

const LoginView = () => {
  const [hasLoginData, setHasLoginData] = useState(false);
  const navigate = useNavigate();

  const login = async (params: {
    email?: string;
    password?: string;
  }) => {
    let { email, password } = params;
    const newParams = {
      email: !!email ? email : undefined,
      password: !!password ? password : undefined,
    };
  
      let data;
      if (Object.values(newParams).filter((value) => !!value).length === 0) {
        console.log("No hay datos?")
      } 
      loginReq(newParams).then(
      (data)=> {
        if (data.status == 200 && data.data.tokenID) {
          localStorage.setItem('token', data.data.tokenID);
          return navigate("/")
        }
      }) 
    .catch (e => {
      console.error(
        "An error occurred getting the token user for provider.",
        e
      );
    });

  }

  const onLogin = (data: any) => {
    console.log(data);
    login(data);
    setHasLoginData(true);
  };
  
  return (
    <Container>
      <SubContainer>
        <TopSubContainer>
          <Title>{STRINGS.sayHello}</Title>
          <Login
            onLogin={onLogin}
            onClear={async () => {
              setHasLoginData(false);
            }}
            hasLoginData={hasLoginData}
          />
        </TopSubContainer>
      </SubContainer>
    </Container>
  );
};

export default LoginView;
