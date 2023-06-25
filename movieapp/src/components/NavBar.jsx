import React, { Fragment, useState } from 'react'
import {HiSearch} from 'react-icons/hi'
import '../Styles/NavBarStyle.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Movies from './Movies'
import TvShows from './TvShows'
import Trends from './Trends'
import Pricing from './Pricing'

export const Container = React.createContext()

function NavBar() {
    const [toggle, setToggle] = useState(true)
    const [inputValue, setInputValue] = useState('')
  return (
    <Container.Provider value={{toggle, inputValue}}>
    <Fragment>
        <nav className={toggle ? '' : 'navBarColor'}>
            <div className='nav-options'>
               
                <h1 id={toggle ? '' : 'heading'}>SahtFliX</h1>
              
                <NavLink to="" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                <span id={toggle ? 'Movies' : 'MoviesLight'}>Filmler</span>
                </NavLink>
                <NavLink to="/TvShows" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                <span id={toggle ? 'Movies' : 'MoviesLight'}>TV Showlari</span>
                </NavLink>
                <NavLink to="/Trends" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                <span id={toggle ? 'Movies' : 'MoviesLight'}>Popüler</span>
                </NavLink>
                <NavLink to="/Pricing" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                <span id={toggle ? 'Movies' : 'MoviesLight'}>Fiyat</span>
                </NavLink>
            </div>
            <div className='input-group'>
            <input type="text" placeholder='Arama Yapin' onChange={(e) => setInputValue(e.target.value)} />
            <HiSearch fontSize={21} color={toggle ? 'black' : '#ff206e'} id='search' />
            <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
                <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
            </div>
            </div>
        </nav>

        <Routes>
             <Route path='' element ={<Movies />} />
             <Route path='TvShows' element ={<TvShows />} />
             <Route path='Trends' element ={<Trends />} />
             <Route path='Pricing' element ={<Pricing />} />
        </Routes>
    </Fragment>
    </Container.Provider>
  )
}

export default NavBar