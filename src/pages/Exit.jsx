import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteUser } from "../core/api/login/queries";
import { useInput } from "../core/utils/useInput";
import { useDispatch, useSelector } from "react-redux";
import { changeIsLogin } from "../redux/modules/postSlice";

const Exit = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.post);

  const onSubmit = (e) => {
    e.preventDefault();
    deleteUser({
      password: password,
    })
      .then((res) => {
        localStorage.removeItem("id");
        localStorage.removeItem("nickname");
        window.location.href = "/";
      })
      .catch((error) => {
        const msg = error.response.data.errorMessage;
        alert(msg);
        console.log("회원가입 실패");
      });
  };

  return (
    <div>
      <Stwrap>
        <Container>
          <Title>
            <img
              src="/image/logo login.png"
              style={{ width: "100px", height: "120px" }}
            />
            <div style={{ marginLeft: "10px" }}>Exit</div>
          </Title>

          <p>PW </p>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(password);
            }}
            autoComplete="off"
          ></Input>

          <div>
            <Btn onClick={onSubmit}>Exit</Btn>
          </div>
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
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    font-size: 65px;
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
  padding: 35px 50px 50px 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  border-radius: 15px;
  width: 300px;
  height: 35px;
  box-shadow: 1px gray;
  outline: none;
  background-color: white;
  font-size: 20px;
  color: black;
`;
const Btn = styled.button`
  width: 300px;
  height: 40px;
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

export default Exit;
