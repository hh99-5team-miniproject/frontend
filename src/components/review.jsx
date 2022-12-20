import {
  __addComment,
  __deleteComment,
  __changeComment,
  __getComment,
} from "../redux/modules/reviewSlice";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

const Review = ({ id }) => {
  console.log(id);
  const dispatch = useDispatch();
  const { isLoading, error, comments } = useSelector((state) => state);
  console.log(comments);

  const [addComment, setAddComment] = useState({
    comment: "",
  });
  const [changeComment, setChangeComment] = useState({
    comment: "",
  });

  useEffect(() => {
    dispatch(__getComment({ postId: id }));
  }, [dispatch, id]);

  const onClickAddCommentHandler = (addComment) => {
    dispatch(__getComment([addComment, id]));
  };
  const onClickDeleteHandler = () => {
    dispatch(__deleteComment({ postId: id }));
  };
  const onClickChangeHandler = () => {
    dispatch(__changeComment([changeComment]));
  };

  return (
    <div>
      <Reviews>💕 댓글 List</Reviews>
      <Writebtn>작성하기</Writebtn>

      {comments.map((comment) => {
        return (
          <Div>
            <Texts
              onChange={(e) => {
                setChangeComment({ ...changeComment, content: e.target.value });
              }}
            >
              {comment}
            </Texts>
            <Reviewbtn onClick={onClickChangeHandler}>수정</Reviewbtn>
            <Reviewbtn onClick={onClickDeleteHandler}>삭제</Reviewbtn>
          </Div>
        );
      })}

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
      <Upbtns>
        <Upload onClick={() => onClickAddCommentHandler(addComment.comment)}>
          등록하기
        </Upload>
        <Upload>취소하기</Upload>
      </Upbtns>
    </div>
  );
};
const Div = styled.div`
  margin-bottom: 20px;
`;
const Reviews = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;
const Writebtn = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 30px;
  border: 3px solid white;
  background-color: transparent;
  color: white;
  &:hover {
    background-color: blueviolet;
    border: none;
    color: white;
  }
  margin-bottom: 20px;
  margin-left: 900px;
`;
const Texts = styled.div`
  width: 850px;
  height: 40px;
  border-radius: 30px;
  background-color: white;
  color: black;
  font-size: 20px;
  outline: none;
  margin-bottom: 20px;
`;
const Reviewtext = styled.textarea`
  width: 1000px;
  height: 100px;
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
const Reviewbtn = styled.button`
  width: 60px;
  height: 40px;
  border: 3px solid white;
  border-radius: 30px;
  background-color: transparent;
  color: white;
  &:hover {
    background-color: blueviolet;
    border: none;
    color: white;
  }
  margin-left: 10px;
`;

export default Review;
