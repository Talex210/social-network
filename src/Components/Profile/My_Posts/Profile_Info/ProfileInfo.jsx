import React, {useState} from 'react'
import Preloader from '../../../Common/Preloader/Preloader'
import checkMarkTrue from '../../../../assets/img/checkMarkTrue.jpg'
import checkMarkFalse from '../../../../assets/img/checkMarkFalse.jpg'
import NoAvatar from '../../../../assets/img/NoAvatar.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileDataForm from './ProfileDataForm'

import s from './ProfileInfo.module.css'

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => setEditMode(false)
        )
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.photoUser}>
                    <img
                        alt='profile_photo'
                        src={profile.photos.large || NoAvatar}
                    />
                </div>

                <div>
                    {isOwner &&
                        <input
                            type={'file'}
                            onChange={onMainPhotoSelected}
                        />
                    }
                </div>

                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />

                {editMode
                    ? <ProfileDataForm
                        profile={profile}
                        onSubmit={onSubmit}
                        initialValues={profile}
                    />
                    : <ProfileData
                        profile={profile}
                        isOwner={isOwner}
                        goToEditMode={() => setEditMode(true)}
                    />
                }
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            { isOwner &&
            <div>
                <button onClick={goToEditMode}>
                    Edit profile
                </button>
            </div>
            }

            <div>
                <b>Имя пользователя: </b>
                {profile.fullName}
            </div>

            <div className={s.aboutMe}>
                <b>Обо мне: </b> {profile.aboutMe}
            </div>

            <div className={s.contactsAll}>
                <div>
                    <b>Контакты:</b>

                    {Object.keys(profile.contacts).map(key => {
                        return (
                            <Contact
                                key={key}
                                contactTitle={key}
                                contactValue={profile.contacts[key]}
                            />
                        )
                    })}
                </div>
            </div>

            <div className={s.lookingForAJob}>
                <div>
                    <b>Ищет работу?</b>
                </div>

                <img alt='true or false' src={profile.lookingForAJob ? checkMarkTrue : checkMarkFalse}/>

                <div>
                    <b>Описание: </b>

                    {profile.lookingForAJobDescription}
                </div>
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contacts}>
            <b>{contactTitle}: </b>

            {contactValue}
        </div>
    )
}

export default ProfileInfo
