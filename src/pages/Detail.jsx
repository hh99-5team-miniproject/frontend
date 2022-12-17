import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const navigate = useNavigate();

  return (
    <Stwrap>
      <Title>제목</Title>
      <Videoarea>유투브영상</Videoarea>

      <Text></Text>
      <Btns>
        <Heart>❤️ 10</Heart>
        <Btn>
          <Stbtn>수정</Stbtn>
          <Stbtn>삭제</Stbtn>
        </Btn>
      </Btns>
    </Stwrap>
  );
};

const Stwrap = styled.div`
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-size: cover;
  margin-top: 180px;
  display: grid;
  place-items: center;
`;

const Title = styled.div`
  font-size: 50px;
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;
const Videoarea = styled.div`
  width: 1000px;
  height: 500px;
  background-color: transparent;
  border: 1px solid grey;
  color: white;
`;
const Heart = styled.div`
  color: white;
  font-size: 30px;
  margin-right: 900px;
`;
const Text = styled.div`
  width: 1000px;
  height: 300px;
  border: 1px solid grey;
  margin-top: 20px;
  background-color: transparent;
  text-underline-offset: inherit;
  color: white;
  font-size: 20px;
  resize: none;
`;
const Stbtn = styled.button`
  color: white;
  background-color: transparent;
  border: 3px solid white;
  width: 200px;
  height: 60px;
  margin-top: 30px;
  margin-left: 20px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    background-color: blueviolet;
    color: white;
    border: none;
  }
`;
const Btn = styled.div`
  margin-left: 500px;
  margin-bottom: 50px;
`;
const Btns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Detail;
