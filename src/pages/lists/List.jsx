import React from 'react'
import { Navbar, Sidebar } from '../../components/components'
import './list.scss'
import PropertyTable from './tables/PropertyTable';
import ViewTable from './tables/ViewTable';


const List = ({ type }) => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="list__container">
        <Navbar />
        <div className="list__container__items">
          {type === 'property' ? <PropertyTable /> : <ViewTable />}
        </div>
      </div>
    </div>
  )
}

export default List
