import React from 'react'
import Home from './home/home'
import SearchArea from './search-area/searchArea'
import SideNavBar from './side-nav-bar/sideNavBar'

export default function Dashboard() {
        return (
                <div className='container'>
                        <div className='row mt-3'>
                                <div className='col-3'>
                                        <SideNavBar />
                                </div>
                                <div className='col-6'>
                                        <Home />
                                </div>
                                <div className='col-3'>
                                        <SearchArea />
                                </div>

                        </div>
                </div>

        )
}
