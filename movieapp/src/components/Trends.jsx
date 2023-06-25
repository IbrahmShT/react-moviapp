import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Container } from './NavBar'
import '../Styles/videos.css'
import axios from 'axios'
import NoImage from './NoImage.jpg'
import { AiOutlineClose, AiFillPlayCircle } from 'react-icons/ai';
import TrailersTrending from '../Trailers/TrailersTrending'
const Images = 'https://image.tmdb.org/t/p/w500/'

function Trends() {
  const {toggle } = useContext(Container)
  const Api = 'https://api.themoviedb.org/3'
  const TrendsShown = '/trending/all/week'
  const [trendsArray, setTrendArray] = useState([])
  const [trendArray, setTrendTitle] = useState('')
  const [trailer, setTrailer] = useState(true)
  const Trends = async() =>{
    const data = await axios.get(`${Api}${TrendsShown}` , {
      params: {
        api_key:'0b0b7c9ae198f316de08e958eed9a86a',
      }
    })
    const results = data.data.results
    setTrendArray(results)
  }

  useEffect(() => {
    setTimeout(() => {
      Trends()
    },100)
   
  },[])
  const TrendTitle = (trend) => {
    setTrendTitle(trend.title)
    setTrailer(!trailer)
  }
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
        <div className='movies-container'>
          {trendsArray.map((trend) => {
            return (
              <Fragment>
              <div id={trailer ? 'container' : 'NoContainer'}>
                <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : 'hide'} onClick={() => TrendTitle(trend)} />
                <img src={trend.poster_path ? `${Images}${trend.poster_path}` : NoImage} alt=''onClick={() => TrendTitle(trend)} />
                <h3 id='smaller-Text'  className={toggle ? 'mainColor' : 'secondaryColor'}>{ trend.title }</h3>
              </div>
              </Fragment>
            ) 
          })}
          {trailer ? console.log : <TrailersTrending TrendTitle ={TrendTitle} toggle={toggle} />}
        </div>
      </div>
      <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} cursor={'pointer'} onClick={() => setTrailer(true)} />

    </Fragment>
  )
}

export default Trends;