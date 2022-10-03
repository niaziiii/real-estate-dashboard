import React,{useContext} from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppContexts } from '../../contexts/AppContext';


const Navbar = () => {
  const {user} = useContext(AppContexts)
  return (
    <div className='navbar'>
      <div className="navbar__search">
        <form action="#">
          <input type="text" />
          <SearchIcon type='submit' />
        </form>
      </div>

      <div className="navbar__icons">
        <h3>
          <NotificationsIcon />
          <span><p>1</p></span>
        </h3>

        <h3>
          <AccountCircleIcon />
          <b>{user.name}</b>
        </h3>
      </div>
    </div>
  )
}

export default Navbar
