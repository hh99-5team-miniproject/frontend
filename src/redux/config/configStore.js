import { configureStore } from "@reduxjs/toolkit";

import post from "../modules/postSlice";
import comment from "../modules/commentSlice";

const store = configureStore({
  reducer: { post: post, comment: comment },
});

export default store;
