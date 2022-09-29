import React from 'react'
import './sidebar.scss'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import { GoGitPullRequest } from 'react-icons/go';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>

      <div className="sidebar__top">
        <h2>Admin Panel</h2>
      </div>

      <div className="sidebar__main">
        <p className='title'>Main</p>
        <li className="links">
          <Link to='/'>
            <span >
              <AdminPanelSettingsIcon />
              <p>Dashboard </p>
            </span>
          </Link>
        </li>

        <p className='title'>Lists</p>
        <li className="links">
          <Link to='/requests'>
            <span >
              <GoGitPullRequest />
              <p>Requests </p>
            </span>
          </Link>
        </li>

        <li className="links">
          <Link to='/property'>
            <span >
              <DomainAddIcon />
              <p>Properties </p>
            </span>
          </Link>
        </li>


        <p className='title'>Setting</p>
        <li className="links">
          <Link to='/profile'>
            <span >
              <SettingsIcon />
              <p>Profile </p>
            </span>
          </Link>
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
