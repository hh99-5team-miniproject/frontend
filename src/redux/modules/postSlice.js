import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../../core/api/axios";

const initialState = {
  posts: [],
  categoryPosts: [],
  post: {},
  checkPostLike: null,
  likeCount: null,
  isLogin: false,
  isLoading: false,
  postError: null,
  editPostError: null,
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
      const data = await instance.delete(`/api/posts/${payload}`);
      console.log(data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      // alert(error.response.data.errorMessage);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addPost = createAsyncThunk(
  "addPost",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post("/api/posts", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editPost = createAsyncThunk(
  "editPost",
  async (payload, thunkAPI) => {
    try {
      const [newPost, id] = payload;
      const data = await instance.put(`/api/posts/${id}`, newPost);
      return thunkAPI.fulfillWithValue(payload);
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
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getCategoryPost = createAsyncThunk(
  "getCategoryPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `/api/posts/category?category=${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    changeIsLogin(state, action) {
      console.log(action.payload);
      return (state.isLogin = !action.payload);
    },
  },
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
      state.checkPostLike = action.payload.checkPostLike;
      state.likeCount = action.payload.likeCount;
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

      console.log(state.checkPostLike);
      if (state.checkPostLike === true) {
        state.likeCount += 1;
      } else {
        state.likeCount -= 1;
      }
      state.checkPostLike = !state.checkPostLike;
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
      window.location.href = "/";
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.postError = action.payload;
      console.log(action.payload);
      alert(action.payload.response.data.errorMessage);
    },

    [__addPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts.push(action.payload);
      window.location.href = `/category/${action.payload.category}`;
    },
    [__addPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      alert(action.payload.response.data.errorMessage);
    },

    [__editPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__editPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
      window.location.href = `/category/${action.payload[0].category}`;
    },
    [__editPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.editPostError = action.payload;
      alert(action.payload.response.data.errorMessage);
    },

    [__getCategoryPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getCategoryPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categoryPosts = action.payload;
    },
    [__getCategoryPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = postSlice.actions;
export let { changeIsLogin } = postSlice.actions;
export default postSlice.reducer;
