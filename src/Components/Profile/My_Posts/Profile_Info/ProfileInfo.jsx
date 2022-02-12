import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.imgBlock}>
                <img alt='background' src='https://discordik.ru/wp-content/uploads/2021/02/fon-dlya-diskorda.png'/>
            </div>
            <div className={s.descriptionBlock}>
                {props.description}
            </div>
        </div>
    );
}

export default ProfileInfo;