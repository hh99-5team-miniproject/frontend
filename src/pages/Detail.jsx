import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Stwrap>
        <Title>제목</Title>
        <Videoarea>유투브영상</Videoarea>
        <Heart>♡ like</Heart>
        <Text></Text>
        <Btn>
          <Stbtn>수정</Stbtn>
          <Stbtn>삭제</Stbtn>
        </Btn>
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
  margin-top: 120px;
`;
const Title = styled.div`
  font-size: 50px;
  color: white;
  margin-bottom: 20px;
`;
const Videoarea = styled.div`
  width: 1200px;
  height: 600px;
  background-color: transparent;
  border: 1px solid grey;
  color: white;
`;
const Heart = styled.div`
  color: white;
  font-size: 30px;
`;
const Text = styled.div`
  width: 1200px;
  height: 300px;
  border: 1px solid white;
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
  width: 300px;
  height: 70px;
  margin-top: 30px;
  margin-left: 20px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    background-color: #e9c4f3;
    color: #8c168c;
  }
`;
const Btn = styled.div`
  margin-left: 560px;
  margin-bottom: 50px;
`;

export default Detail;
