import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="best">
        <h2>Best Playlist Top 3🏆️</h2>
        <div className="bestCards">
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

      <div className="category">
        <h2>상황에 맞는 음악을 추천해드려요</h2>
        <div className="categoryBtn">
          <img src="https://music-phinf.pstatic.net/20181204_250/1543919478560Iwmnn_PNG/mood_7_Focus.png?type=f360" />
        </div>
      </div>
    </div>
  );
};

export default Home;
