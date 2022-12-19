import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/home/Home";
import Category from "../pages/category/Category";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Post from "../pages/Post";
import Register from "../pages/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/post" element={<Post />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
