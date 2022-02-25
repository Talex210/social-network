import s from './ProfileInfo.module.css';
import Preloader from '../../../Common/Preloader/Preloader';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.imgBlock}>
                <img alt='background' src='https://discordik.ru/wp-content/uploads/2021/02/fon-dlya-diskorda.png'/>
            </div>
            <div className={s.descriptionBlock}>
                {props.description}
                <img alt='photo' src={props.profile.photos.large}/>
            </div>
        </div>
    );
}

export default ProfileInfo;