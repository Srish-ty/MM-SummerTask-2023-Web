import React, {useState} from 'react';
import { Navbar } from '../components/Navbar';
import { Intro } from '../components/Intro';
import { Articles } from '../components/Articles';
import './style/pages.style.css'

export default function Home() {
  const [category, setCategory] = useState("general");

  return (
    <div className='page home'>
    <Navbar/>
    <Intro/>

    <Articles category={category}/>
    </div>
  )
}
