import React,{useState} from 'react';
import { Outlet, Link } from "react-router-dom";

import '../styles/articles.style.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';

export const Article = ({data, artid, showArti}) => {
    const arti = data;
    const loadImg='https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';
    let [viewCount, setView]=useState(0);
    let [likeCount, setLikecount]= useState(0);

    const showThis=()=>{
      viewCount+=1; setView(viewCount);
      showArti(arti);
      console.log(arti)
    }
    
    const likefunc=()=>{
      //liked? likeCount-=1:likeCount+=1;
      likeCount+=1;
      setLikecount(likeCount); //console.log(likeCount);
      liked? setLike(false):setLike(true)
    }
    var [liked, setLike] = useState(false);
    return (
    <div className='narticlepost'>
      <img alt={arti.title[0]} src={arti.urlToImage?arti.urlToImage:loadImg} className='postimg'></img>
  
      <Link to="/Article" className='nPara' onClick={showThis}  >
        <h1 className='ptitle'>{arti.title}</h1>
  
        <div className='author'><b>Author: </b>{arti.author?arti.author:'unknown'}</div>
        <p className='contentpara'>
           {arti.content?(arti.content).slice(0,200)+" ..." : " "} 
        </p>
        <a className='readMore' href={arti.url} target='_blank'> <b>Read more {arti.author?"at "+arti.author:""}</b> </a>
  
      </Link>
    <div className='likeview'>
      <span className='liked' onClick={likefunc}> Likes:
      {
        liked? <FavoriteSharpIcon className='likeheart'/>:<FavoriteBorderSharpIcon className='likeheart'/>
      }
      {likeCount}
      </span>
      <Link to="/Article" className='viewed' onClick={showThis} target="_blank" rel="noreferrer" > Views:
        <VisibilityIcon className='viewIco'/>
        {viewCount}
      </Link>
    </div>
    </div>
    )
}
