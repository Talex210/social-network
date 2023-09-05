import React from 'react'
import {creatField, Input, Textarea} from '../../../Common/FormsControls/FormsControls'
import {reduxForm} from 'redux-form'

import s from './ProfileInfo.module.css'
import style from '../../../Common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>
                    Save profile
                </button>

                {error && <div className={style.formSummaryError}>
                    {error}
                </div>}
            </div>

            <div>
                <b>Имя пользователя: </b>
                {creatField('Full name', Input, 'fullName', [])}
            </div>

            <div className={s.aboutMe}>
                <b>Обо мне: </b>
                {creatField('Обо мне', Input, 'aboutMe', [])}
            </div>

            <div className={s.contactsAll}>
                <div>
                    <b>Контакты:</b>
                    {Object.keys(profile.contacts).map(key => {
                        return (
                            <div
                                className={s.contacts}
                                key={key}
                            >

                                <b>
                                    {key}:
                                    {creatField(key, Input, 'contacts.' + key, [])}
                                </b>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={s.lookingForAJob}>
                <div>
                    <b>Ищет работу?</b>
                    {creatField('', Input, 'lookingForAJob', [], {type: 'checkbox'})}
                </div>

                <div>
                    <b>Мои профессиональные навыки: </b>

                    {creatField(
                        'Мои профессиональные навыки',
                        Textarea,
                        'lookingForAJobDescription',
                        [],
                    )}
                </div>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataFormReduxForm
