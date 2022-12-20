import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../core/api/axios";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    try {
      const [addComment, id] = payload;
      // payload에 전달되는 addComment와 id를 가져올 수 있다.
      const data = await instance.post(`/api/posts/${id}/comments`, addComment);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __deleteComment = createAsyncThunk(
  "deleteComment",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.delete(
        "/api/posts/{postId}/comments/{commentId}",
        {
          content: payload.content,
        }
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __changeComment = createAsyncThunk(
  "changeComment",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.put(
        "/api/posts/{postId}/comments/{commentId}",
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __getComment = createAsyncThunk(
  "getComment",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`/api/posts/${payload.postId}`);
      console.log(data);
      console.log(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const reviewSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoadig = false;
      state.comment = state.comment.filter(
        (comment) => comment.id !== action.payload
      );
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteComment.pending]: (state) => {
      state.isLoadig = true;
    },
    [__changeComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = state.comment.map((state) => {
        if (state.id === action.payload.id) {
          return { ...action.payload };
        } else {
          return state;
        }
      });
    },
    [__changeComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__changeComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoadig = false;
      state.comments = action.payload;
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoadig = false;
      state.error = action.payload;
    },
    [__getComment.pending]: (state) => {
      state.isLoadig = true;
    },
  },
});

export const {} = reviewSlice.actions;
export default reviewSlice.reducer;
