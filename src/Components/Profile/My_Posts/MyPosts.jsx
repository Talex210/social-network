import React from 'react'
import MyPost from './Post/MyPost'
import MyPostForm from './MyPostForm'

import s from './MyPosts.module.css'

class MyPosts extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps === this.props || nextState !== this.state
    }

    render() {
        // console.log('render')
        let postElements = [...this.props.profilePage.postsData]
            .reverse()
            .map((p, i) => (
                <MyPost
                    key={i}
                    message={p.message}
                    likeCounter={p.likeCounter}
                    dislikeCounter={p.dislikeCounter}
                />
            ))

        return (
            <div className={s.postBlock}>
                <h3>My posts</h3>
                <MyPostForm {...this.props}/>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        )
    }
}

export default MyPosts
