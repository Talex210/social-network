import React from 'react'

// import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status || '',
    }

    activateEditMode = () => {
        this.setState({editMode: !this.state.editMode})
        if (this.state.editMode) {
            this.props.updateStatus(this.state.status)
        }
    }

    onStatusChange = (event) => {
        this.setState({status: event.target.value})
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status || 'Double click to set status'}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            autoFocus
                            onBlur={this.activateEditMode}
                            value={this.state.status}
                            onChange={this.onStatusChange}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus
