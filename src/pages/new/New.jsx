import React from 'react'
import { AddProperty, Navbar, Sidebar } from '../../components/components'
import './new.scss'


const New = () => {
  return (
    <div className='new'>
      <Sidebar />
      <div className="new__container">
        <Navbar />
        <div className="new__container__property">
          <AddProperty />
        </div>
      </div>
    </div>
  )
}

export default New
