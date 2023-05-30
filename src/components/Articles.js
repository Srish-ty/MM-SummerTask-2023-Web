import React from 'react';
import './styles/articles.style.css';
import { Article } from './particles/Article.js';


export const Articles = () => {
  return (
    <div>
           {
      newsArray.map((item)=>{

        <Article newsItem={item} key={item.title}/>
      })
    }
    </div>
  )
}
