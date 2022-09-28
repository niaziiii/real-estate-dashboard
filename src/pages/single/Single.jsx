import React from 'react'
import './single.scss'
import { Navbar, Sidebar, PropertyOverview } from '../../components/components'


const Single = () => {
  return (
    <div className='single-page'>
      <Sidebar />
      <div className="single-page__container">
        <Navbar />
        <div className="single-page__container__property">
          <PropertyOverview />
        </div>
      </div>
    </div>
  )
}

export default Single
