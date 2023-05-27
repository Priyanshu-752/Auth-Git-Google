import React from 'react'
import { posts } from '../data';
import "../pages/post.css"
import { useLocation } from 'react-router-dom';

const Post = () => {

    const location = useLocation()
    const path = location.pathname.split("/")[2]

    const post = posts.find(p=>p.id.toString() === path)
  return (
    <div className='post'>
    <img src={post.img} alt='' className='postImg'/>
    <hi className="postTitle">{post.title}</hi>
    <p className='postDesc'>{post.desc}</p>
    <p className='postLongDesc'>{post.longDesc}</p>
    </div>
  )
}

export default Post
