import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import styled from "styled-components";
import { __getPosts } from "../../redux/modules/postSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, posts } = useSelector((state) => state.post);

  // 호출시 사용!!!
  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  // if (isLoading) {
  //   return <div>로딩 중....</div>;
  // }

  // if (error) {
  //   alert("홈에서 나온 에러메세지", error.response.data.errorMessage);
  //   console.log("홈에서 나온 에러메세지", error.response.data.errorMessage);
  // }

  const thumbnail = posts.map((post) => {
    return `https://img.youtube.com/vi/${post.youtubeUrl.split("/")[4]}/0.jpg`;
  });

  console.log(thumbnail);

  return (
    <div className="homeMain">
      <div className="category">
        <h2>상황에 맞는 음악을 추천해드려요🎶</h2>
        <div className="categoryBtns">
          <CategoryBtn
            imgUrl="/image/집중하고 싶을 때.png"
            onClick={() => navigate("/category/집중하고 싶을 때")}
          >
            집중하고 싶을 때
          </CategoryBtn>
          <CategoryBtn
            imgUrl="/image/잠깨우고 싶을 때.png"
            onClick={() => navigate("/category/잠 깨고 싶을 때")}
          >
            잠깨고 싶을 때
          </CategoryBtn>
          <CategoryBtn
            imgUrl="/image/에러가 뜰 때.png"
            onClick={() => navigate("/category/에러가 뜰 때")}
          >
            에러가 뜰 때
          </CategoryBtn>
          <CategoryBtn
            imgUrl="/image/TIL쓸 때.png"
            onClick={() => navigate("/category/TIL or WIL 작성할 때")}
          >
            TIL/WIL 작성할 때
          </CategoryBtn>
          <CategoryBtn
            imgUrl="/image/팀원과 트러블이 있을 때.png"
            onClick={() => navigate("/category/팀원과 트러블이 있을 때")}
          >
            팀원과 트러블 있을 때
          </CategoryBtn>
        </div>
      </div>

      <div className="best">
        <h2>Best Playlist Top 3🏆️</h2>
        <div className="homeBestCards">
          {posts?.map((post, i) => {
            return (
              <div
                className="homeBestCard"
                onClick={() => navigate(`/detail/${post.postId}`)}
              >
                <img className="homeBestCardImage" src={thumbnail[i]}></img>
                <div className="homeBestCardInfo">
                  <div>{post.title}</div>
                  <div className="homeBestCardInfoLikeCount">
                    ❤️ {post.likeCount}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

const CategoryBtn = styled.div`
  width: 322px;
  height: 322px;
  min-width: 250px;
  min-height: 250px;
  border-radius: 20px;
  box-sizing: border-box;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("${(props) => props.imgUrl}");
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  margin-right: 50px;
`;
