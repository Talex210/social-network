import React from 'react'
import MyPost from './Post/MyPost'
import MyPostForm from './MyPostForm'

import s from './MyPosts.module.css'

const MyPosts = (props) => {
    let postElements = props.profilePage.postsData.map((p, i) => (
        <MyPost key={i} message={p.message}
                likeCounter={p.likeCounter}
                dislikeCounter={p.dislikeCounter}/>))

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <MyPostForm {...props}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts
