import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import Comments from "../components/Comments";
import {
  __getPost,
  __postLike,
  __deletePost,
} from "../redux/modules/postSlice";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isLoading, error, post, checkPostLike, likeCount } = useSelector(
    (state) => state.post
  );

  // 임시로 작성해봄 true or false
  // const { pushLike } = useSelector((state) => state.post.post);
  // const { likeCount } = useSelector((state) => state.post.post);
  const [isLogin, setIslogin] = useState(true);

  // 호출시 사용!!!
  useEffect(() => {
    if (localStorage.getItem("id") === true) {
      setIslogin(true);
    }
    console.log(isLogin);
    dispatch(__getPost(Number(id)));
  }, [dispatch, id]);

  // console.log(post);
  console.log(checkPostLike);
  console.log(likeCount);

  const onClickEditPostHandler = () => {
    if (isLogin) {
      navigate(`/editpost/${id}`);
    } else {
      alert("로그인 후 이용가능합니다.");
    }
  };

  const onClickDeletePostHandler = () => {
    // if (isLogin) {
    dispatch(__deletePost(Number(id)));
    navigate("/");
    // } else {
    //   alert("로그인 후 이용가능합니다.");
    // }
  };

  const onClickloginHeartHandler = () => {
    dispatch(__postLike(Number(id)));
  };

  const onClickNonloginHeartHandler = () => {
    alert("로그인 시 이용가능합니다.");
  };

  if (isLoading) {
    return <div>로딩 중....</div>;
  }
  console.log(isLogin);

  if (error) {
    alert("디테일에서 나온 에러메세지", error.response.data.errorMessage);
  }

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
            <div>{checkPostLike === true ? "🤍" : "❤️"}</div>
            <div>{likeCount}</div>
          </Heart>
        ) : (
          <Heart onClick={onClickNonloginHeartHandler}>
            <div>🤍</div>
            <div>{likeCount}</div>
          </Heart>
        )}
        <Btn>
          <Stbtn onClick={onClickEditPostHandler}>수정</Stbtn>
          <Stbtn onClick={onClickDeletePostHandler}>삭제</Stbtn>
        </Btn>
      </Btns>

      <Comments isLogin={isLogin} />
      {/* 해당하는 id를 넘겨줌 */}
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

const Title = styled.div`
  font-size: 40px;
  color: white;
  margin-bottom: 20px;
  width: 850px;
`;
const Videoarea = styled.iframe`
  width: 850px;
  height: 500px;
  border: 2px solid black;
`;
const Heart = styled.div`
  display: flex;
  color: white;
  font-size: 30px;
`;
const Text = styled.div`
  width: 850px;
  height: 200px;
  border: 1px solid grey;
  margin-top: 20px;
  background-color: transparent;
  text-underline-offset: inherit;
  color: white;
  font-size: 20px;
  resize: none;
`;
const Btn = styled.div`
  display: flex;
`;
const Stbtn = styled.button`
  color: white;
  background-color: transparent;
  border: 3px solid white;
  width: 150px;
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
const Btns = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
`;

export default Detail;
