import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  __addComment,
  __deleteComment,
  __changeComment,
  __getComment,
} from "../redux/modules/commentSlice";
import EditComment from "./EditComment";

const Comments = ({ isLogin }) => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { isLoading, error, comments } = useSelector((state) => state.comment);

  const [addComment, setAddComment] = useState({
    comment: "",
  });

  const onClickAddCommentHandler = () => {
    // if (isLogin) {
    dispatch(__addComment([addComment, id]));
    setAddComment({
      comment: "",
    });
    // } else {
    //   alert("로그인 후 이용가능합니다.");
    // }
  };

  return (
    <Wrap>
      <Reviews>Comments</Reviews>

      {comments.map((comment) => (
        <EditComment comment={comment} />
      ))}

      <Reviewtext
        value={addComment.comment}
        placeholder="댓글을 입력해주세요."
        onChange={(e) => {
          setAddComment({
            ...addComment,
            comment: e.target.value,
          });
        }}
      ></Reviewtext>

      <Upload onClick={onClickAddCommentHandler}>등록하기</Upload>
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Reviews = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;

const Reviewtext = styled.input`
  width: 850px;
  resize: none;
  background-color: white;
  color: black;
  border-radius: 10px;
  font-size: 20px;
  outline: none;
  margin-bottom: 50px;
`;

const Upload = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 30px;
  border: 3px solid white;
  background-color: transparent;
  color: white;
  margin-bottom: 40px;
  margin-left: 700px;
  font-size: 18px;
  &:hover {
    background-color: blueviolet;
    border: none;
    color: white;
  }
`;

export default Comments;
