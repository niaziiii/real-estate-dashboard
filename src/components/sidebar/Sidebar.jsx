import React from 'react'
import './sidebar.scss'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
    <div className='sidebar'>

      <div className="sidebar__top">
        <h2>Admin Panel</h2>
      </div>

      <div className="sidebar__main">
        <p className='title'>Main</p>
        <li className="links">
          <span >
            <AdminPanelSettingsIcon />
            <p>Dashboard </p>
          </span>
        </li>

        <p className='title'>Lists</p>
        <li className="links">
          <span >
            <Person2Icon />
            <p>Users </p>
          </span>
        </li>

        <li className="links">
          <span >
            <DomainAddIcon />
            <p>Properties </p>
          </span>
        </li>


        <p className='title'>Setting</p>
        <li className="links">
          <span >
            <SettingsIcon />
            <p>Profile </p>
          </span>
        </li>


      </div>

      <div className="sidebar__bottom">
        <p className='title'>mode</p>
        <div className="changeColors">
          <div></div>
          <div></div>
        </div>
        <li className="links">
          <span >
            <LogoutIcon />
            <p>Logout </p>
          </span>
        </li>
      </div>
    </div>
  )
}

export default Sidebar
