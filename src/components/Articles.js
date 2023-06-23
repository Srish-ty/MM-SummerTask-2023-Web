import React,{useState, useEffect} from 'react';
import { apikey0 } from '../apikeys';
import './styles/articles.style.css';
import { Article } from './particles/Article.js';


export const Articles=({category})=>{

  const [articles, setArticles] = useState([]);

  console.log(category);
  
    useEffect(()=>{

    //console.log(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey0}&category=${category}`);
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey0}&category=${category}`)
    .then(resapi=>{return resapi.json();})
    .then(res=>{
      setArticles(res.articles);
    })
      .catch(err=>{console.log(err);})
  
    },[category])
    
  return(
    <section className='articont'>
      {
    articles.map(
      article=>(
        <Article data={article}></Article>
      )
    )
      }
    </section>
  )
  }