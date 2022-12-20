import { configureStore } from "@reduxjs/toolkit";

import post from "../modules/postSlice";
import review from "../modules/reviewSlice";

const store = configureStore({
  reducer: { post: post, review: review },
});

export default store;
