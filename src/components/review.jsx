import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Review = () => {
  const [write, setWrite] = useState("");
  const [btn, setBtn] = useState("");

  const onChangeWrite = (e) => {
    setWrite(e.target.value);
  };
  const onChangeBtn = (e) => {
    setBtn(e.target.value);
  };

  return (
    <div>
      <div>
        <div value={write} onChange={onChangeWrite} />
        <div value={btn} onChange={onChangeBtn} />
      </div>
      <div>
        <Reviewtext></Reviewtext>
        {write}
        <Upbtns>
          <Upload>등록하기</Upload>
          {btn}
          <Upload>취소하기</Upload>
          {btn}
        </Upbtns>
      </div>
    </div>
  );
};

const Reviewtext = styled.textarea`
  width: 1000px;
  height: 300px;
  resize: none;
  background-color: white;
  color: black;
  border-radius: 20px;
  font-size: 20px;
  outline: none;
  margin-bottom: 50px;
`;
const Upload = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 30px;
  border: 3px solid white;
  background-color: transparent;
  color: white;
  &:hover {
    background-color: blueviolet;
    border: none;
    color: white;
  }
  margin-bottom: 40px;
  margin-left: 20px;
  margin-top: -40px;
`;
const Upbtns = styled.p`
  margin-left: 550px;
`;

export default Review;
