import React,{useState, useEffect} from 'react';
import { apikey0 } from '../apikeys';
import './styles/articles.style.css';
import { SortNav } from './particles/SortNav';
import { Article } from './particles/Article.js';


export const Articles=({setShowedart})=>{

  const [articles, setArticles] = useState([]);

  const [category,setCategory] = useState('general');
  //const [showarticle, setShowedart] =  useState(articles[0])

  let artid=0;
  //console.log(category);
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
    <>

    <SortNav selectCat={setCategory} val={category}/>

    <section className='articont' id='articont'>
      {
    articles.map(
      article=>(
        <Article data={article} key={artid} artid={artid++} showArti={setShowedart}></Article>
      )
    )
      }
    </section>
    </>
  )
  }