import React, {useState} from 'react';
import { Navbar } from '../components/Navbar';
import { Intro } from '../components/Intro';
import { Articles } from '../components/Articles';
import './style/pages.style.css'

export default function Home({setShowedart}) {
  //const [category, setCategory] = useState("general");

  return (
    <div className='page home'>
    <Navbar/>
    <Intro/>

    <Articles setShowedart={setShowedart} />
    </div>
  )
}
