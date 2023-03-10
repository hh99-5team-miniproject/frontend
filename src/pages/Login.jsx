import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postLogin } from "../core/api/login/queries";
import { useInput } from "../core/utils/useInput";
import { useDispatch, useSelector } from "react-redux";
import { changeIsLogin } from "../redux/modules/postSlice";

const Login = () => {
  const [id, setId] = useInput();
  const [password, setPassword] = useInput();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.post);

  const onSubmit = (e) => {
    e.preventDefault();
    postLogin({
      loginId: id,
      password: password,
    })
      .then((res) => {
        localStorage.setItem("id", res.headers.authorization);
        localStorage.setItem("nickname", res.data.nickname);
        window.location.href = "/";
      })
      .catch((error) => {
        const msg = error.response.data.errorMessage;
        alert(msg);
        console.log("로그인 실패");
        navigate("/login");
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
            <div style={{ marginLeft: "10px" }}>Login</div>
          </Title>

          <p>ID</p>
          <Input
            type="text"
            id="nickname"
            value={id}
            onChange={setId}
            autoComplete="off"
          ></Input>

          <p>PW </p>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={setPassword}
            autoComplete="off"
          ></Input>

          <div>
            <Btn margin="20px" onClick={onSubmit}>
              Log In
            </Btn>
            <Btn margin="0" onClick={() => navigate("/register")}>
              Sign Up
            </Btn>
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
  width: 144px;
  height: 40px;
  background-color: transparent;
  color: white;
  border: 3px solid white;
  margin-top: 35px;
  margin-right: ${(props) => props.margin};
  border-radius: 20px;
  font-size: 20px;
  &:hover {
    background-color: blueviolet;
    color: white;
    border: none;
  }
`;

export default Login;
