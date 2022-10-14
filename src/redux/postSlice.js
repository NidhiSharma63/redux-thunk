import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const GET_POST_URL= "https://jsonplaceholder.typicode.com/posts"

const initialState = {
  post:[],
  error:'',
  loading:false
}

// fetch the post
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts', // yha pr action name vhi rkhna h jo slice ka h
  async () => {
    console.log('first')
    const response = await fetch(GET_POST_URL)
    const data = await response.json();
    return data
  }
)

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder
    .addCase(fetchPosts.pending,(state)=>{
      state.loading=true
    })
    .addCase(fetchPosts.fulfilled,(state,action)=>{
      state.loading=false
      state.post=action.payload
    })
    .addCase(fetchPosts.rejected,(state,action)=>{
      state.loading=false
      state.error=action.error.message
    })
  }
});

export default postSlice.reducer;
export const getPost = (state) => state.postReducer.post;
export const getLoading = (state) => state.postReducer.loading