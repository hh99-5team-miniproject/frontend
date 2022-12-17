import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header" onClick={() => navigate("/")}>
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
