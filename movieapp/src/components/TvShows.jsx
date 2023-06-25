import React, { Fragment, useContext, useEffect, useState } from 'react'
import { AiFillPlayCircle, AiOutlineClose } from 'react-icons/ai'
import { Container } from './NavBar'
import '../Styles/videos.css'
import NoImage from './NoImage.jpg'
import axios from 'axios'
import TrailerTvShows from '../Trailers/TrailerTvShows'

function TvShows() {
  const {toggle, inputValue} = useContext(Container)
  const input = inputValue
  const [showData, setShowData] = useState([])
  const [trailer, setTrailer] = useState(true)
  const Shown = input ? 'search' : 'discover'
  const [title, setTitle] = useState('')
  const Api = `https://api.themoviedb.org/3/${Shown}/tv`
  const Images = 'https://image.tmdb.org/t/p/w500/'
  const TvShows = async () => {
    const data = await axios.get(Api, {
      params:{
        api_key:'0b0b7c9ae198f316de08e958eed9a86a',
        query : input
      }
    })
    const results = (data.data.results)
    setShowData(results)
  }
    useEffect(() => {
      setTimeout(() => {
        TvShows()
      },100)  
    },[input])
    console.log(showData)
    const TvShowTitle = (shows) => {
      setTitle(shows.name)
      setTrailer(!trailer)

    }
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
      <div className='movies-container'>
      {showData.map((shows) => {
        return(
          <Fragment key={shows.id}>
            <div id={trailer ? 'container' : 'NoContainer'}>
              <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : 'hide'} onClick={() => TvShowTitle(shows)} />
              <img src={shows.poster_path ? `${Images}${shows.poster_path}` : NoImage} alt="" onClick={() => TvShowTitle(shows)} />
              <h3 id={shows.name.lenght > 28 ? 'smaller-Text' : ''} className={toggle ? 'mainColor' : 'secondaryColor'} > {shows.title} </h3>
            </div>
          </Fragment>
        )
      })}
46 | {trailer ? console.log() : <TrailerTvShows TvShowsTitle={title} />}
      <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} cursor={'pointer'} onClick={() => setTrailer(true)} />

      </div>
      </div>

    </Fragment>
  )
}

export default TvShows