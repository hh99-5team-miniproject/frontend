import React from "react";
import "./header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="headerTitle">Coding Vibe</div>
        <div className="headerTop">
          <div className="headerTopText">길동님 환영합니다!</div>
          <button className="headerTopButton">글 작성</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
