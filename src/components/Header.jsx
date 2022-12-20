import React, { useEffect, useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeIsLogin } from "../redux/modules/postSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.post);

  const [nickname, setNickname] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("nickname")) {
      setNickname(localStorage.getItem("nickname"));
    }
  }, []);

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
        {nickname !== null ? (
          <div className="headerTopLogin">
            <div className="headerTopText">{nickname}님 환영합니다!</div>
            <button
              className="headerTopButton"
              onClick={() => {
                localStorage.clear();
                setNickname(null);
                dispatch(changeIsLogin());
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
