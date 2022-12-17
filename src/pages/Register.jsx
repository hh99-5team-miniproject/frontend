import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Stwrap>
        <Container>
          <Title>회원가입</Title>
          <p>ID</p>
          <Input></Input>
          <p>PW </p>
          <Input></Input>
          <p>CHECK PW </p>
          <Input></Input>
          <p>NICKNAME</p>
          <p>
            <Input></Input>
          </p>
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
  width: 300px;
  height: 40px;
  background-color: white;
  color: black;
`;
const Btn = styled.button`
  width: 300px;
  height: 50px;
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

export default Register;
