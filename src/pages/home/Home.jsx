import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import styled from "styled-components";
import { __getPosts } from "../../redux/modules/postSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, posts } = useSelector((state) => state.post);

  // 호출시 사용!!!
  // useEffect(() => {
  //   dispatch(__getPosts());
  // }, [dispatch]);

  // if (isLoading) {
  //   return <div>로딩 중....</div>;
  // }

  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  // console.log(posts);

  return (
    <div className="homeMain">
      <div className="category">
        <h2>상황에 맞는 음악을 추천해드려요🎶</h2>
        <div className="categoryBtns">
          <CategoryBtn
            imgUrl="/image/집중하고 싶을 때.png"
            onClick={() => navigate("/category/집중하고 싶을 때 좋은 노래")}
          >
            집중하고 싶을 때
          </CategoryBtn>
          <CategoryBtn
            imgUrl="/image/잠깨우고 싶을 때.png"
            onClick={() => navigate("/category/잠깨고 싶을 때 좋은 노래")}
          >
            잠깨고 싶을 때
          </CategoryBtn>
          <CategoryBtn
            imgUrl="/image/에러가 뜰 때.png"
            onClick={() => navigate("/category/에러가 뜰 때 좋은 노래")}
          >
            에러가 뜰 때
          </CategoryBtn>
          <CategoryBtn
            imgUrl="/image/TIL쓸 때.png"
            onClick={() => navigate("/category/TIL or WIL 작성할 때 좋은 노래")}
          >
            TIL/WIL 작성할 때
          </CategoryBtn>
          <CategoryBtn
            imgUrl="/image/팀원과 트러블이 있을 때.png"
            onClick={() =>
              navigate("/category/팀원과 트러블 있을 때 좋은 노래")
            }
          >
            팀원과 트러블 있을 때
          </CategoryBtn>
        </div>
      </div>

      <div className="best">
        <h2>Best Playlist Top 3🏆️</h2>
        <div className="bestCards">
          {posts?.map((post) => {
            return (
              <div className="bestCard">
                <img src={post.youtubeUrl}></img>
                <div className="bestCardInfo">
                  <div>{post.title}</div>
                  <div>❤️ {post.likeCount}</div>
                </div>
              </div>
            );
          })}
          <div className="bestCard">
            <img src="https://music-phinf.pstatic.net/20221215_58/1671066897772zjqpJ_PNG/vv.png?type=f310_182"></img>
            <div className="bestCardInfo">
              <div>공부할 때 듣는 플레이리스트</div>
              <div>❤️ 20</div>
            </div>
          </div>

          <div className="bestCard">
            <img src="https://music-phinf.pstatic.net/20221215_58/1671066897772zjqpJ_PNG/vv.png?type=f310_182"></img>
            <div className="bestCardInfo">
              <div>공부할 때 듣는 플레이리스트</div>
              <div>❤️ 15</div>
            </div>
          </div>

          <div className="bestCard">
            <img src="https://music-phinf.pstatic.net/20221215_58/1671066897772zjqpJ_PNG/vv.png?type=f310_182"></img>
            <div className="bestCardInfo">
              <div>공부할 때 듣는 플레이리스트</div>
              <div>❤️ 10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const CategoryBtn = styled.div`
  width: 250px;
  height: 250px;
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
