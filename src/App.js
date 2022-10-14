import React, { useState,useEffect } from 'react';
import {fetchPosts,getPost,getLoading} from './redux/postSlice';
import {useSelector,useDispatch} from 'react-redux'

function App() {
  const getPosts = useSelector(getPost);
  const stateloading = useSelector(getLoading)
  console.log('state',stateloading);
  console.log('post',getPosts);
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(fetchPosts())}>click me </button>
    </div>
  )
}

export default App
