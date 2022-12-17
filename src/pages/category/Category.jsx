import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./category.css";

const Category = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(typeof id);

  return (
    <div className="categoryMain">
      <div className="menu">
        <div>집중하고싶을 때</div>
        <div>잠깨고싶을 때</div>
        <div>에러가뜰 때</div>
        <div>TIL/WIL작성할 때</div>
        <div>팀원과 트러블 있을 때</div>
      </div>
      <div className="best">
        <h2>{id}</h2>
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
    </div>
  );
};

export default Category;
