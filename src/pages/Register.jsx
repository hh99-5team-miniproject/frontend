import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Stwrap>
        <Container>
          <Title>
            <img
              src="/image/logo login.png"
              style={{ width: "100px", height: "120px" }}
            />
            <div>Sign Up</div>
          </Title>
          <p>ID</p>
          <Input></Input>
          <p>PW </p>
          <Input></Input>
          <p>NICKNAME</p>
          <Input></Input>

          <Btn
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign Up
          </Btn>
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
  font-size: 70px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  align-items: center;
  div {
    font-size: 60px;
  }
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
  border-radius: 30px;
  padding: 40px 50px 50px 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  border-radius: 15px;
  width: 300px;
  height: 35px;
  background-color: white;
  color: black;
  outline: none;
  font-size: 20px;
`;
const Btn = styled.button`
  width: 308px;
  height: 42px;
  background-color: transparent;
  color: white;
  border: 3px solid white;
  margin-top: 35px;
  border-radius: 20px;
  font-size: 20px;
  &:hover {
    background-color: blueviolet;
    color: white;
    border: none;
  }
`;

export default Register;
