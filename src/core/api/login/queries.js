import { instance } from "../axios";

export const postLogin = async (post) => {
  try {
    const data = await instance.post("/api/login", post);
    alert(1000, "success", "로그인 성공");
    return data;
  } catch (error) {
    alert(1000, "error", error.response.data.msg);
  }
};

export const postLogout = async () => {
  try {
    const data = await instance.post("/api/logout");
    alert(1000, "success", "로그아웃 성공");
    return data;
  } catch (error) {
    alert(1000, "error", error.response.data.msg);
  }
};

export const postSignup = async (post) => {
  try {
    const data = await instance.post("/api/signup", post);
    const idCheck = await instance.post("/api/signup/id/check", post);
    const nicknameCheck = await instance.post(
      "/api/signup/nickname/check",
      post
    );
    alert(1000, "success", "회원가입 성공");
    return data;
  } catch (error) {
    alert(1000, "error", error.response.data.msg);
  }
};
