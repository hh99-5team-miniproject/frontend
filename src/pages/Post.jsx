import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Wrap>
        <Title>
          제목 <Input></Input>
        </Title>
        <Video>
          URL <Input></Input>
        </Video>
        <Content>
          내용 <Textarea></Textarea>
        </Content>
        <Write>등록하기</Write>
      </Wrap>
    </div>
  );
};

const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 20px;
  margin-top: 150px;
`;
const Title = styled.div`
  font-size: 20px;
  color: white;
`;
const Input = styled.input`
  width: 1000px;
  height: 40px;
  background-color: white;
  color: black;
  outline: none;
  border-radius: 30px;
  font-size: 20px;
  margin-bottom: 30px;
  margin-top: 20px;
`;
const Video = styled.div`
  font-size: 20px;
  color: white;
`;
const Content = styled.div`
  font-size: 20px;
  color: white;
`;
const Textarea = styled.textarea`
  width: 1000px;
  height: 300px;
  resize: none;
  background-color: white;
  color: black;
  font-size: 20px;
  border-radius: 20px;
  outline: none;
  margin-top: 20px;
`;
const Write = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  color: white;
  background-color: transparent;
  border: 3px solid white;
  border-radius: 30px;
  &:hover {
    background-color: blueviolet;
    color: white;
    border: none;
  }
  margin-top: 30px;
`;

export default Post;
