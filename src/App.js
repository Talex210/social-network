import './App.css'
import NavBar from './Components/Nav_Bar/NavBar'
import {Routes, Route} from 'react-router-dom'
import News from './Components/News/News'
import Music from './Components/Music/Music'
import Settings from './Components/Settings/Settings'
import Friends from './Components/Friends/Friends'
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import UsersContainer from './Components/Users/UsersContainer'
import ProfileContainer from './Components/Profile/ProfileContainer'
import HeaderContainer from './Components/Header/HeaderContainer'

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavBar friendsAvatar={props.state.dialogsPage.dialogsData}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/friends' element={<Friends/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
