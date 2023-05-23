import React from 'react';
import '../styles/nav.styles.css';
import mmlogo from '../../images/logo_mm_white.png';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';

export const NavMid = () => {
  return (
    <div className='nav-mid'>
      <a className='nav-item' href='#'>Home</a>
      <a className='nav-item' href='#'>Articles</a>
      <a className='nav-item' href='#'>About us</a>
      <a className='nav-item' href='#'>Search</a>
    </div>
  )
}

export const NavEnd = ({current_mode, ont})=>{
  return(
    <div className='nav-end'>
      <a className='nav-item' href='#'>Login</a>
      <a className='nav-item' id='dmode' href='#' onClick={ont}> { current_mode=='light'?<DarkModeIcon/> : <Brightness4Icon/> } </a>
    </div>
  )
}

export const MMLogo = ()=>{
  return(
    <span className='logo-cont'>
      <img className='logo-img' src={mmlogo} alt='MM logo'/>
    </span>
  )
}