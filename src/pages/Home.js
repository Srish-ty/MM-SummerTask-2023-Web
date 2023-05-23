import React, {useState} from 'react';
import { Navbar } from '../components/Navbar';
import { Intro } from '../components/Intro';
import './style/pages.style.css'

export default function Home() {
  return (
    <div className='page home'>
    <Navbar/>
    <Intro/>
    </div>
  )
}
