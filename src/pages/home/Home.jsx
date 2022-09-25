import React from 'react'
import './home.scss'
import {Navbar,Sidebar} from '../../components/components'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="home__container">
        <Navbar/>
      </div>
    </div>
  )
}

export default Home
