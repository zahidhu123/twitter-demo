import React from 'react';
import './sideNavBar.css'

export default function SideNavBar() {
  return (
    <div className=''>
      <div className='d-flex flex-column align-items-start'>
        <div className='twitter'>
          <i class="fa-brands fa-twitter" />
        </div>
        <div className='home-wrapper'>

          <p className='side-text'> <i class="fa-solid fa-house me-2"></i>Home</p>
        </div>
        <div className='home-wrapper'>

          <p className='side-text'> <i class="fa-solid fa-hashtag me-2"></i> Explore</p>
        </div>
        <div className='home-wrapper'>

          <p className='side-text'><i class="fa-solid fa-bell me-2"></i> Notifications</p>
        </div>
        <div className='home-wrapper'>

          <p className='side-text'><i class="fa-solid fa-envelope me-2"></i> Messages</p>
        </div>
        <div className='home-wrapper'>

          <p className='side-text'> <i class="fa-solid fa-user me-2"></i> Profile</p>
        </div>
        <div className='home-wrapper'>

          <p className='side-text'><i class="fa-solid fa-ellipsis me-2"></i> More</p>
        </div>

      </div>

      <div className='mt-4'>
        <button className='w-100 rounded-pill py-3 button-clr me-2'>Tweet</button>
      </div>
      <div className='d-flex align-items-center mt-5'>
        <div className='user-logo'>
          <i class="fa-solid fa-user" ></i>
        </div>
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
