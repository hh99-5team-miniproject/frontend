import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  __addComment,
  __deleteComment,
  __getComment,
  __editComment,
} from "../redux/modules/commentSlice";

const EditComment = ({ comment }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { isLoading, error, comments } = useSelector((state) => state.comment);

  useEffect(() => {
    dispatch(__getComment({ postId: id }));
  }, [dispatch, id]);

  console.log(comments);

  const onClickDeleteCommentHandler = (commentId) => {
    dispatch(__deleteComment({ postId: id, commentId: commentId }));
  };
  const [isCommentChange, setIsCommentChange] = useState(false);

  const [editComment, setEditComment] = useState({
    comment: "",
  });

  const onClickEditCommentButtonHandler = (commentId) => {
    if (isCommentChange === false) {
      setIsCommentChange(true);
    } else {
      dispatch(
        __editComment({
          editComment: editComment,
          postId: id,
          commentId: commentId,
        })
      );
      setIsCommentChange(false);
    }
  };

  if (isLoading) {
    return <div>댓글 불러오는 중...</div>;
  }

  if (error) {
    alert(
      "댓글 수정에서 나온 에러메세지",
      "타인의 댓글을 수정 및 삭제할 수 없습니다!"
    );
  }

  return (
    <Div>
      <Comment>
        {isCommentChange === false ? (
          <CommentTexts>
            <CommentText>{comment.nickname}</CommentText>
            <CommentText>{comment.comment}</CommentText>
          </CommentTexts>
        ) : (
          <CommentEditInput>
            <CommentText>{comment.nickname}</CommentText>
            <input
              type="text"
              onChange={(e) => {
                setEditComment({
                  ...editComment,
                  comment: e.target.value,
                });
                console.log(editComment);
              }}
            ></input>
          </CommentEditInput>
        )}

        <div>
          <Reviewbtn
            onClick={() => {
              onClickEditCommentButtonHandler(comment.commentId);
            }}
          >
            수정
          </Reviewbtn>
          <Reviewbtn
            onClick={() => {
              onClickDeleteCommentHandler(comment.commentId);
            }}
          >
            삭제
          </Reviewbtn>
        </div>
      </Comment>
    </Div>
  );
};

const Div = styled.div`
  margin-bottom: 20px;
`;

const Comment = styled.div`
  width: 850px;
  height: 40px;
  outline: none;
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentTexts = styled.div`
  display: flex;
`;

const CommentText = styled.div`
  margin-right: 15px;
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
  margin-left: 15px;
`;

const CommentEditInput = styled.div`
  display: flex;
`;

export default EditComment;
