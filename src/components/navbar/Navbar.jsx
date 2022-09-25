import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
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
          <b>Zafar Ali</b>
        </h3>
      </div>
    </div>
  )
}

export default Navbar
