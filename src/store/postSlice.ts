import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  posts: [],
  loading: false,
  error: null,
  postContent:{}
};

// Async thunk to fetch posts from an API
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const requestOptions: any = {
      method: "GET"
    };
    const response = await  fetch(`${process.env.REACT_APP_API_URL}/posts`, requestOptions);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    return data;
  }
);

// Create a slice
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // You can add other reducers here if needed
    getPostContent: (state, action: PayloadAction<string>) => {
      const filteredPosts = state.posts.filter((post:any) => post.slug === action.payload);
      state.postContent = filteredPosts[0];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;  // Start loading
        state.error = null;    // Clear previous errors
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;  // Stop loading
        state.posts = action.payload;  // Set fetched posts
      })
      .addCase(fetchPosts.rejected, (state:any, action) => {
        state.loading = false;  // Stop loading
        state.error = action.error.message;  // Set error message
      });
  },
});
export const { getPostContent } = postsSlice.actions;

export default postsSlice.reducer;
