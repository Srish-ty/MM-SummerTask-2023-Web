import React,{useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import '../components/styles/articles.style.css';
import '../components/styles/ShowArticle.style.css';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';

export const ShowArticle = ({showing}) => {
    const arti = showing;
    const loadImg='https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';

    let [likeCount, setLikecount]= useState(0);
    var [liked, setLike] = useState(false);
    const likefunc=()=>{
        //liked? likeCount-=1:likeCount+=1;
        likeCount+=1;
        setLikecount(likeCount); 
        liked? setLike(false):setLike(true)
      }
      
  return (
    <>
    <Navbar/>

    <div className='narticlepost'>
        <Link to='../' className='postnavi'> <FirstPageIcon className='naviback'/> Back </Link>

      <img alt={arti.title[0]} src={arti.urlToImage?arti.urlToImage:loadImg} className='postimg'></img>
  
      <div className='nPara'>
        <h1 className='ptitle'>{arti.title}</h1>
  
        <div className='author'><b>Author: </b>{arti.author?arti.author:'unknown'}</div>
        <p className='contentpara'>
           {arti.content?(arti.content): " "} 
        </p>
        <a className='readMore' href={arti.url} target='_blank'> <b>Read more {arti.author?"at "+arti.author:""}</b> </a>
  
      </div>
    <div className='likeview'>
      <span className='liked' onClick={likefunc}> Likes:
      {
        liked? <FavoriteSharpIcon className='likeheart'/>:<FavoriteBorderSharpIcon className='likeheart'/>
      }
      {likeCount}
      </span>
      <span className='viewed'>
       Views:
        <VisibilityIcon className='viewIco'/>
        </span>
    </div>
    </div>

    </>
  )
}
