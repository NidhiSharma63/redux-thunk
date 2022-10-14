import React, { useState,useEffect } from 'react';
import {fetchPosts,getPost,getLoading} from '../redux/postSlice';
import {useSelector,useDispatch} from 'react-redux'

const PostList = () => {

  const getPosts = useSelector(getPost);
  const stateloading = useSelector(getLoading)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchPosts());
  },[])
  return (
    <div className='post-wrapper'>
      {
        getPosts.map((post,index)=>(
          <div className='single-post' key={index}>
            <h4>{post.title}</h4>
            <h6>{post.body}</h6>
          </div>
        ))
      }
    </div>
  )
}

export default PostList;