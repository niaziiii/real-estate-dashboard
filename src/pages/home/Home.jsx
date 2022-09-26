import React from 'react'
import './home.scss'
import {Navbar,Sidebar,Widgets,Progressbar,Chart} from '../../components/components'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="home__container">
        <Navbar/>
        <div className="home__container__widgets">
          <Widgets type={'rentProperties'}/>
          <Widgets type={'saleProperties'}/>
          <Widgets type={'viewRequests'}/>
        </div>
        <div className="home__container__progess-chart">
        <div className="home__container__progess-chart__progress">
          <Progressbar/>
        </div>
        <div className="home__container__progess-chart__chart">
          <Chart/>
        </div>
      </div>
      </div>
  
    </div>
  )
}

export default Home
