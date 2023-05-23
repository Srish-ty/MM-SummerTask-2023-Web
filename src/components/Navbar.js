import React, {useState} from 'react';
import './styles/nav.styles.css'
import { MMLogo, NavMid, NavEnd } from './particles/NavItems';

export const Navbar = () => {
    var [mode, setMode] = useState('light');
    const cMode =()=>{
     mode=='light'? setMode('dark'):setMode('light');
 
     let nav =document.getElementsByClassName('navbar')[0];
     if(mode=='light'){ 
         nav.style.backgroundColor = '#1f232c';
         document.body.style.backgroundColor = '#303747';
      }
      else{
         nav.style.backgroundColor = '#01243b';
         document.body.style.backgroundColor = '#e9eef7';
      }
    }
  return (
    <nav className='navbar'>
        <MMLogo/>
        <NavMid/>
        <NavEnd current_mode={mode} ont={cMode}/>
    </nav>
  )
}
