import React, { useState } from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import CommentsModal from '../commentsModal/commentsModal'
import { useSelector } from 'react-redux'

const Post = ({ data }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const {user} = useSelector((state) => state.authReducer.authData);
  return (
    <div className='Post'>
      <img src={ data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : '' } alt="" />
      <div className="postReact">
        <img src={ data.liked ? Heart : NotLike } alt="" />
        <img src={ Comment } alt="" onClick={() => setModalOpened(true)} />
        <CommentsModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
        <img src={ Share } alt="" />
      </div>
      <span style={{color: 'var(--gray)', fontSize: '12px'}}>{ data.likes } likes</span>
      <div className="detail">
        <span><b>{ data.name }</b></span>
        <span> { data.desc }</span>
      </div>
    </div>
  )
}

export default Post
