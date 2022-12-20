import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import {
  __getPost,
  __postLike,
  __deletePost,
} from "../redux/modules/postSlice";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isLoading, error, post } = useSelector((state) => state.post);
  // 임시로 작성해봄 true or false
  // const { pushLike } = useSelector((state) => state.post.post);
  // const { likeCount } = useSelector((state) => state.post.post);
  const [isLogin, setIslogin] = useState(false);
  const pushLike = true;

  // 호출시 사용!!!
  useEffect(() => {
    dispatch(__getPost(Number(id)));
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  console.log(post);

  if (localStorage.getItem("id") === true) {
    setIslogin(true);
  }
  const onClickDeletePostHandler = () => {
    dispatch(__deletePost(Number(id)));
    navigate("/");
  };

  const onClickEditPostHandler = () => {
    navigate(`/editpost/${id}`);
  };

  const onClickloginHeartHandler = () => {
    dispatch(__postLike(Number(id)));
  };

  const onClickNonloginHeartHandler = () => {
    alert("로그인 시 이용가능합니다.");
  };

  return (
    <Stwrap>
      <Title>{post.title}</Title>

      <Videoarea
        width="560"
        height="315"
        src={post.youtubeUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></Videoarea>

      <Text>{post.content}</Text>
      <Btns>
        {isLogin === true ? (
          <Heart onClick={onClickloginHeartHandler}>
            {pushLike === true ? "❤️" : "🤍"}
            {post.likeCount}
          </Heart>
        ) : (
          <Heart onClick={onClickNonloginHeartHandler}>
            🤍 {post.likeCount}
          </Heart>
        )}
        <Btn>
          <Stbtn onClick={onClickEditPostHandler}>수정</Stbtn>
          <Stbtn onClick={onClickDeletePostHandler}>삭제</Stbtn>
        </Btn>
      </Btns>

      <Reviews>💕 댓글 List</Reviews>
      <Div>
        <Input></Input>
        <Input></Input>
      </Div>

      <Reviewtext></Reviewtext>
      <Upbtns>
        <Upload>등록하기</Upload>
        <Upload>취소하기</Upload>
      </Upbtns>
    </Stwrap>
  );
};

const Stwrap = styled.div`
  background-color: #000000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-size: cover;
  //margin-top: 180px;
  margin: 180px auto;
  display: grid;
  place-items: center;
`;
const Div = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: white;
  margin-bottom: 20px;
  width: 1000px;
`;
const Videoarea = styled.iframe`
  width: 1000px;
  height: 500px;
  border: 2px solid black;
`;
const Heart = styled.div`
  color: white;
  font-size: 30px;
`;
const Text = styled.div`
  width: 1000px;
  height: 200px;
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
const Reviews = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;
const Input = styled.div`
  width: 1000px;
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

export default Detail;
