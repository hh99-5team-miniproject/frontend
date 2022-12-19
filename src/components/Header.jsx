import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { postLogout } from "../core/api/login/queries";

function Header() {
  const navigate = useNavigate();
  // const nickname = localStorage.getItem("nickname");
  const nickname = false;

  return (
    <div className="header">
      <img
        src="/image/logo.png"
        onClick={() => {
          navigate("/");
        }}
        className="headerLogo"
      />
      <div
        className="headerTitle"
        onClick={() => {
          navigate("/");
        }}
      >
        Coding Vibe
      </div>
      <div className="headerTop">
        {nickname === true ? (
          <div className="headerTopLogin">
            <div className="headerTopText">{nickname}님 환영합니다!</div>
            <button
              className="headerTopButton"
              onClick={(e) => {
                e.preventDefault();
                postLogout();
              }}
            >
              로그아웃
            </button>
          </div>
        ) : (
          <button
            className="headerTopButton"
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </button>
        )}

        <button
          className="headerTopButton"
          onClick={() => {
            navigate("/post");
          }}
        >
          글 작성
        </button>
      </div>
    </div>
  );
}

export default Header;
