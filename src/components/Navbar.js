import React, {useState} from 'react';
import './styles/nav.styles.css'
import { MMLogo, NavMid, NavEnd } from './particles/NavItems';

export const Navbar = () => {
    var [mode, setMode] = useState('light');
    const cMode =()=>{
     mode=='light'? setMode('dark'):setMode('light');
 
     let nav =document.getElementsByClassName('navbar')[0];
     nav.style.backgroundColor = (mode=='light'?'#1f232c':'#01243b');
     document.body.style.backgroundColor = (mode=='light'?'#303747':'#e9eef7');

    }
  return (
    <nav className='navbar'>
        <MMLogo/>
        <NavMid/>
        <NavEnd current_mode={mode} ont={cMode}/>
    </nav>
  )
}
