import React from 'react';
import './sideNavBar.css'

export default function SideNavBar() {
  return (
    <div className=''>
      <div className='twitter'>
        <i class="fa-brands fa-twitter" />
      </div>
      <div className='home-wrapper'>
        <div className='house-img'>
          <i class="fa-solid fa-house" />
        </div>
        <p className='side-text'>Home</p>
      </div>
      <div className='home-wrapper'>
        <div className='house-img'>
        <i class="fa-solid fa-house" />
        </div>
        <p className='side-text'>Explore</p>
      </div>
      <div className='home-wrapper'>
        <div className='house-img'>
          <i class="fa-solid fa-house" />
        </div>
        <p className='side-text'>Notifications</p>
      </div>
      <div className='home-wrapper'>
        <div className='house-img'>
          <i class="fa-solid fa-house" />
        </div>
        <p className='side-text'>Messages</p>
      </div>
      <div className='home-wrapper'>
        <div className='house-img'>
          <i class="fa-solid fa-house" />
        </div>
        <p className='side-text'>Profile</p>
      </div>
      <div className='home-wrapper'>
        <div className='house-img'>
          <i class="fa-solid fa-house" />
        </div>
        <p className='side-text'>More</p>
      </div>
      <div className='mt-4'>
        <button className='w-100 rounded-pill py-3 button-clr'>Tweet</button>
      </div>
      <div className='d-flex align-items-center mt-5'>
        <div className='logo'></div>
        <div className='ps-3'>
          <div>
            <p className='m-0 profile'>Zahid Hussain</p>
            <p className='m-0 email'>@ZahidHu94408430</p>
          </div>
        </div>
      </div>
    </div>
  )
}
