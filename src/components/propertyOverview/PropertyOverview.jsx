import React from 'react'
import { OverViewLeftHeading,OverViewAmenities,OverviewAgent, } from './overview'
const data ={
    _id:"632cd014f260911d18701f37",
    nameProperty:"5BR+Maid+Driver Room|Independent Villa|Large",
    category:"Villa",
    type:"sale",
    price:100000,
    location:"multan",
    area:"799.00 SQ.FT.",
    beds:9,
    bathrooms:"2",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    coverImages:["https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80","https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"],
    amenities:["Balcony","Broadband ready","Central air conditioning","Central heating","Covered parkinglly","fitted kitchen","Gymnasium","Laundry washing room","On mid floor","Satellite/Cable TV","Sauna","Shared swimming pool","Steam room","24 hours Maintenance"],
    createdAt:"2022-09-22T21:13:56.401Z"
}
const PropertyOverview = () => {
  return (
    <div>
        <div className='app__productOverview' >
            <div className="app__productOverview__content">
                <div className="app__productOverview__content__left">
                    <OverViewLeftHeading data={data} />
                </div>

                <div className="app__productOverview__content__right">
                    <OverviewAgent data={data} />
                    {data.amenities ? <OverViewAmenities data={data.amenities} /> : ''}
                </div>

            </div>
        </div>
    </div>
  )
}

export default PropertyOverview
