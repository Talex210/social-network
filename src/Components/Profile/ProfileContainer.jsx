import React from 'react'
import Profile from "./Profile";

export class ProfileContainer extends React.Component {
    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}
