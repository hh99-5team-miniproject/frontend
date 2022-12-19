import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../../core/api/axios";

const initialState = {
  posts: [],
  post: {},
  isLoading: false,
  error: null,
};

// 메인페이지에 띄울 게시물들 가져오기
export const __getPosts = createAsyncThunk(
  "getPosts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get("/api/posts");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 상세페이지에 보여줄 게시물 데이터
export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/api/posts/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 게시물 삭제 시
export const __deletePost = createAsyncThunk(
  "deletePost",
  async (payload, thunkAPI) => {
    try {
      await instance.delete(`/api/posts/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addPost = createAsyncThunk(
  "addPost",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post("/api/posts");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 로그인하고 좋아요 버튼을 눌렀을 때
export const __postLike = createAsyncThunk(
  "postLike",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post(`/api/posts/${payload}/like`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__postLike.pending]: (state) => {
      state.isLoading = true;
    },
    [__postLike.fulfilled]: (state, action) => {
      state.isLoading = false;
      if (state.post.pushLike === true) {
        state.post.likeCount -= 1;
      } else {
        state.post.likeCount += 1;
      }
      state.post.pushLike = !state.post.pushLike;
    },
    [__postLike.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = state.posts.filter(
        (post) => post.postId !== action.payload
      );
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__addPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts.push(action.payload);
    },
    [__addPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
