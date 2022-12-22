import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __addPost } from "../redux/modules/postSlice";

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.post);

  const [addPost, setAddPost] = useState({
    title: "",
    youtubeUrl: "",
    content: "",
    category: "",
  });
  const onClickAddPostHandler = () => {
    console.log(addPost);

    if (addPost.title === "") {
      alert("제목을 입력해주세요.");
    } else if (addPost.youtubeUrl === "") {
      alert("URL을 입력해주세요.");
    } else if (addPost.category === "") {
      alert("카테고리를 선택해주세요.");
    } else if (addPost.content === "") {
      alert("내용을 입력해주세요.");
    } else {
      dispatch(__addPost(addPost));
    }
    //값보다 렌더링이 빨리될 경우 값이 안 들어옴. 새로고침하면 생김.

    // if (error) {
    //   alert(error.response.data.errorMessage);
    // } else {
    //   window.location.href = `/category/${addPost.category}`;
    // }
  };

  return (
    <div>
      <Wrap>
        <Title>
          <div>제목</div>
          <Titleinput
            width="620px"
            onChange={(e) => {
              setAddPost({ ...addPost, title: e.target.value });
            }}
          ></Titleinput>
        </Title>
        <Second>
          <Video>
            <div>URL</div>
            <Videoinput
              width="300px"
              onChange={(e) => {
                setAddPost({ ...addPost, youtubeUrl: e.target.value });
              }}
            ></Videoinput>
          </Video>
          <Select
            onChange={(e) => {
              setAddPost({ ...addPost, category: e.target.value });
            }}
          >
            <option value="" selected>
              카테고리를 선택해주세요
            </option>
            <option value="집중하고 싶을 때">집중하고 싶을 때</option>
            <option value="잠 깨고 싶을 때">잠 깨고 싶을 때</option>
            <option value="에러가 뜰 때">에러가 뜰 때</option>
            <option value="TIL or WIL 작성할 때">TIL/WIL 작성할 때</option>
            <option value="팀원과 트러블이 있을 때">
              팀원과 트러블이 있을 때
            </option>
          </Select>
        </Second>
        <Content>
          <p>내용</p>
          <Textarea
            onChange={(e) => {
              setAddPost({ ...addPost, content: e.target.value });
            }}
          ></Textarea>
        </Content>
        <Write onClick={onClickAddPostHandler}>등록하기</Write>
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
  height: 650px;
`;
const Title = styled.div`
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  div {
    margin-right: 42px;
  }
`;
const Titleinput = styled.input`
  width: ${(props) => props.width};
  height: 40px;
  background-color: white;
  color: black;
  outline: none;
  border-radius: 15px;
  font-size: 20px;
`;
const Videoinput = styled.input`
  width: ${(props) => props.width};
  height: 40px;
  background-color: white;
  color: black;
  outline: none;
  border-radius: 15px;
  font-size: 20px;
`;
const Video = styled.div`
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  div {
    margin-right: 42px;
  }
`;
const Content = styled.div`
  font-size: 20px;
  color: white;
  p {
    margin-bottom: 30px;
  }
`;
const Textarea = styled.textarea`
  width: 700px;
  height: 300px;
  resize: none;
  background-color: white;
  color: black;
  font-size: 20px;
  border-radius: 15px;
  outline: none;
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
const Select = styled.select`
  width: 300px;
  height: 45px;
  border-radius: 15px;
  margin-left: 20px;
`;
const Second = styled.div`
  display: flex;
`;
export default Post;
