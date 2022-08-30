import React, { useEffect, useState } from 'react'
import './home.css';
import Photo0 from '../../../assets/photo.jpg'
import GG from '../../../assets/gg.jpg'
import CC from '../../../assets/cc.png'
import Ch from '../../../assets/ch.jpg'
import Ck from '../../../assets/ck.jpg'
import C19 from '../../../assets/c19.jpg'



export default function Home() {

  // const [newList, setNewsList] = useState([]);


  // useEffect(() => {
  //   getNews();
  // }, []);


  // function getNews() {
  //   axios.get(`https://newsdata.io/api/1/news?apikey=pub_107748c91bb1057509716748edad4d073c1b8&q=tesla`)
  //   .then(res => {
  //    console.log(res.data.results);
  //    setNewsList(res.data.results);
  //   })
  // }
  return (
    <div>
      <form class="search-area">
        <input class="form-control me-2" type="search" placeholder="Search Twitter" aria-label="Search" />
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
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

      <div className='scroll-area'>
        <div className='position-relative'>
          <div className='img-box'>
            <img src={GG} alt="" className='photo0' />
          </div>
          <div className='p-3 text-box'>
            <p className='business'>jkhjkh</p>
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

        <div className='position-relative'>
          <div className='img-box'>
            <img src={CC} alt="" className='photo0' />
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
          <p className='trending'>War in Ukraine · LIVE</p>
          <p className='trending-title'>Latest updates on the war in Ukraine</p>
        </div>

        <div className='position-relative'>
          <div className='img-box'>
            <img src={Ch} alt="" className='photo0' />
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
          <p className='trending'>War in Ukraine · LIVE</p>
          <p className='trending-title'>Latest updates on the war in Ukraine</p>
        </div>

        <div className='position-relative'>
          <div className='img-box'>
            <img src={Ck} alt="" className='photo0' />
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
          <p className='trending'>War in Ukraine · LIVE</p>
          <p className='trending-title'>Latest updates on the war in Ukraine</p>
        </div>

        <div className='position-relative'>
          <div className='img-box'>
            <img src={C19} alt="" className='photo0' />
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
          <p className='trending'>War in Ukraine · LIVE</p>
          <p className='trending-title'>Latest updates on the war in Ukraine</p>
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
          <p className='trending-title'>Business</p>
          <p className='trending'>22.9K Tweets</p>
        </div>

        <div className='trending-wrapper'>
          <p className='trending'>Trending</p>
          <p className='trending-title'>Business</p>
          <p className='trending'>22.9K Tweets</p>
        </div>

      </div>
    </div>
  )
}
