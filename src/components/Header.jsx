import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <img src="/image/logo.png" className="headerLogo" />
      <div className="headerTitle">Coding Vibe</div>
      <div className="headerTop">
        <div className="headerTopText">길동님 환영합니다!</div>
        <button className="headerTopButton">글 작성</button>
      </div>
    </div>
  );
}

export default Header;
