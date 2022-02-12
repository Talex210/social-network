import s from './MyPost.module.css';

const MyPost = (props) => {
    return (
        <div className={s.postBlock}>
            <div className={s.item}>
                <div>
                    <img alt='ava_mini'
                         src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJB9eLnOvvZ9uOcVkBewljvWgpzvRQClmyQw&usqp=CAU'/>
                </div>
                <div>
                    {props.message}
                </div>
                <div>
                    <span>like = {props.likeCounter}</span>
                    <span>   </span>
                    <span>dislike = {props.dislikeCounter}</span>
                </div>
            </div>
        </div>
    );
}

export default MyPost;