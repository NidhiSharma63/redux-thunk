import React, { useState,useEffect } from 'react';
import {fetchPosts,sendPost,getPost,getLoading} from '../redux/postSlice';
import {useSelector,useDispatch} from 'react-redux'

const PostList = () => {

  const [value,setValue] = useState('');
  const [titleValue,setTitleValue] = useState('');

  const getPosts = useSelector(getPost);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchPosts());
  },[]);
  return (
  <>
    <div className="top">
      <input 
        type="text"
        value={titleValue}
        onChange={(e)=>setTitleValue(e.target.value)} />
      <input 
        type="text"
        value={value}
        onChange={(e)=>setValue(e.target.value)} />
      <button
      onClick={()=>dispatch(sendPost({title:titleValue,body:value,userId:'1'}))}>submit</button>
    </div>
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
  </>
  )
}

export default PostList;