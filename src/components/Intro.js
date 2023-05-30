import React from 'react';
import './styles/intro.styles.css';
import full_logo from '../images/mm_white.png';

export const Intro = () => {
  return (
    <section className='intro-sec'>
      <aside className='aside-intro'>
        <div className='logocont'>
          <img src={full_logo} alt='mm-logo' className='intrologo'/>
        </div>
      </aside>
    </section>
  )
}

