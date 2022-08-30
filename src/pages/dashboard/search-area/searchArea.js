import React from 'react'
import './searchArea.css'
import Shiba from '../../../assets/shiba.png'
import Flag from '../../../assets/flag.webp'

export default function SearchArea() {
  return (
    <div className='search-main-box'>
        <div>
          <p className='follow'>Who to follow</p>
        </div>
        <div className='d-flex justify-content-between shiba-profile'>
          <div className='d-flex align-items-center'>
            <img src={Shiba} alt="" className='shiba-img' />
            <div>
              <p className='shiba-title'>SHIBA INU</p>
              <p className='shiba-email'>@ShibInform</p>
            </div>
          </div>
          <p className='follow-btn'>Follow</p>
        </div>
        <div className='d-flex justify-content-between shiba-profile'>
          <div className='d-flex align-items-center'>
            <img src={Flag} alt="" className='shiba-img' />
            <div>
              <p className='shiba-title'>AAMIR KHAN</p>
              <p className='shiba-email'>@Aamirkhan</p>
            </div>
          </div>
          <p className='follow-btn'>Follow</p>
        </div>
        <div className='shiba-profile'>
          <p className='show-more'>Show more</p>
        </div>
    </div>
  )
}
