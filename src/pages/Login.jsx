import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Stwrap>
        <Container>
          <Title>
            <img src="/image/logo.png" className="headerLogo" />
            <div>LogIn</div>
          </Title>
          <p>ID</p>
          <Input></Input>

          <p>PW </p>
          <p>
            <Input></Input>
          </p>
          <Btn>Log In</Btn>
          <Btn>Sign Up</Btn>
        </Container>
      </Stwrap>
    </div>
  );
};

const Stwrap = styled.div`
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
`;
const Title = styled.div`
  font-size: 80px;
  font-weight: lighter;
  margin-bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 20px;
  border: 3px solid white;
  padding: 50px;
`;
const Input = styled.input`
  border-radius: 30px;
  width: 350px;
  height: 40px;
  box-shadow: 1px gray;
  outline: none;
  background-color: white;
  font-size: 20px;
  color: black;
`;
const Btn = styled.button`
  width: 170px;
  height: 40px;
  background-color: transparent;
  color: white;
  border: 3px solid white;
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 30px;
  font-size: 20px;
  &:hover {
    background-color: blueviolet;
    color: white;
    border: none;
  }
`;

export default Login;
