import React from 'react';
import { Outlet, Link } from "react-router-dom";
import '../styles/nav.styles.css';
import mmlogo from '../../images/logo_mm_white.png';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import SearchIcon from '@mui/icons-material/Search';

export const NavMid = () => {
  return (
    <div className='nav-mid'>
      <Link className='nav-item' to='/'>Home</Link>
      <a className='nav-item' href='#articont'>Articles</a>
      <a className='nav-item' href='#'>About us</a>
      <a className='nav-item' href='#'>Search  <SearchIcon/> </a>
    </div>
  )
}

export const NavEnd = ({current_mode, ont})=>{
  return(
    <div className='nav-end'>
      <Link className='nav-item' to='/Dashboard'>Login</Link>
      <a className='nav-item' id='dmode' href='#' onClick={ont}> { current_mode=='light'?<DarkModeIcon/> : <Brightness4Icon/> } </a>
    </div>
  )
}

export const MMLogo = ()=>{
  return(
    <Link to='/' className='logo-cont'>
      <img className='logo-img' src={mmlogo} alt='MM logo'/>
    </Link>
  )
}