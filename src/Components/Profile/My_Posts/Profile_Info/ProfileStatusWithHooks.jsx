import React, {useEffect, useState} from 'react'

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status || '')

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(!editMode)

        if (editMode) {
            props.updateStatus(status)
        }
    }

    const onStatusChange = (event) => {
        setStatus(event.target.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <b>Status: </b>

                    <span onDoubleClick={activateEditMode}>
                        {props.status || 'Double click to set status'}
                    </span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        autoFocus
                        onBlur={activateEditMode}
                        value={status}
                        onChange={onStatusChange}
                    />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks
