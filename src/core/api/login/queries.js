import { instance } from "../axios";

export const postLogin = async (post) => {
  try {
    const data = await instance.post("/api/auth/login", post);
    return data;
  } catch (error) {
    alert(1000, "error", error.response.data.msg);
  }
};

export const postSignup = async (post) => {
  try {
    const data = await instance.post("/api/auth/signup", post);
    alert(1000, "success", "회원가입 성공");
    return data;
  } catch (error) {
    alert(1000, "error", error.response.data.msg);
  }
};
