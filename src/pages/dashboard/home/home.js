import React from 'react'
import './home.css';
import Photo0 from '../../../assets/U91pmUxJ.jpg'

export default function Home() {
  return (
    <div>
      <form class="d-flex justify-content-between align-items-center">
        <input class="form-control me-2" type="search" placeholder="Search Twitter" aria-label="Search" />
        <i class="fa-solid fa-house" />
      </form>
      <div>
      <ul className='manu-wrapper'>
        <li className='manu-item'>For you</li>
        <li className='manu-item'>Trending</li>
        <li className='manu-item'>News</li>
        <li className='manu-item'>Sports</li>
        <li className='manu-item'>Entertainment</li>
        <li className='manu-item'>COVID-19</li>
      </ul>
      </div>
      <div className='position-relative'>
        <div className='img-box'>
          <img src={Photo0} alt="" className='photo0' />
        </div>
        <div className='p-3 text-box'>
          <p className='business'>Business & finance · LIVE</p>
          <p className='business-title'>The latest from the world of business</p>
          <p className='business-subtitle'>Trending with #Nifty</p>
        </div>
      </div>
      <div className='trending-wrapper'>
        <p className='trending'>Trending</p>
        <p className='trending-title'>Virat</p>
        <p className='trending'>22.9K Tweets</p>
      </div>

      <div className='trending-wrapper'>
        <p className='trending'>Trending in India</p>
        <p className='trending-title'>SABKA BADLA LEGA APNA FAISU</p>
      </div>
      <div className='trending-wrapper'>
        <p className='trending'>War in Ukraine · LIVE</p>
        <p className='trending-title'>Latest updates on the war in Ukraine</p>
      </div>
    </div>
  )
}
