import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __editPost, __getPost } from "../redux/modules/postSlice";

const EditPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const { id } = useParams();

  useEffect(() => {
    dispatch(__getPost(Number(id)));
  }, [dispatch]);

  const selected = useSelector((state) => state.post.post);

  useEffect(() => {
    if (selected) {
      setTitle(selected.title);
      setCategory(selected.category);
      setContent(selected.content);
      setYoutubeUrl(selected.youtubeUrl);
    }
  }, [selected]);

  const onClickEditPostHandler = () => {
    const newPost = {
      title: title,
      youtubeUrl: youtubeUrl,
      content: content,
      category: category,
    };
    dispatch(__editPost([newPost, id]));
    // navigate(`/category/${newPost.category}`);
    window.location.href = `/category/${newPost.category}`;
    console.log(newPost);
  };

  return (
    <div>
      <Wrap>
        <Title>
          <div>제목</div>
          <Input
            width="620px"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></Input>
        </Title>
        <Second>
          <Video>
            <div>URL</div>
            <Input
              width="300px"
              value={youtubeUrl}
              onChange={(e) => {
                setYoutubeUrl(e.target.value);
              }}
            ></Input>
          </Video>
          <Select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="" selected>
              카테고리를 선택해주세요
            </option>
            <option value="집중하고 싶을 때">집중하고 싶을 때</option>
            <option value="잠깨고 싶을 때">잠깨고 싶을 때</option>
            <option value="에러가 뜰 때">에러가 뜰 때</option>
            <option value="TIL or WIL 작성할 때">TIL/WIL 작성할 때</option>
            <option value="팀원과 트러블 있을 때">팀원과 트러블 있을 때</option>
          </Select>
        </Second>
        <Content>
          <p>내용</p>
          <Textarea
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></Textarea>
        </Content>
        <Write onClick={onClickEditPostHandler}>등록하기</Write>
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
const Input = styled.input`
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
export default EditPost;
