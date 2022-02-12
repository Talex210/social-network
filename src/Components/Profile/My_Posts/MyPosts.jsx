import s from './MyPosts.module.css';
import React from "react";
import MyPost from "./Post/MyPost";

const MyPosts = (props) => {

    let postElements = props.profilePage.postsData.map((p, i) => (
        <MyPost key={i} message={p.message}
                likeCounter={p.likeCounter}
                dislikeCounter={p.dislikeCounter}/>));

    let newPostElement = React.createRef()

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateText(text);
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder='Enter new post'
                              onChange={onPostChange} ref={newPostElement}
                              value={props.postText}/>
                </div>
                <div className={s.buttons}>
                    <button onClick={props.addPost}>Add Post</button>
                    <span>  </span>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;