import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Post from "../pages/Post";
import Register from "../pages/Register";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
//BrowserRouter를 Router로 감싸는 이유는,
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Layout>
        <Routes>
          {/* 
						Routes안에 이렇게 작성합니다. 
						Route에는 react-router-dom에서 지원하는 props들이 있습니다.

						path는 우리가 흔히 말하는 사용하고싶은 "주소"를 넣어주면 됩니다.
						element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어줍니다.
				 */}
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
