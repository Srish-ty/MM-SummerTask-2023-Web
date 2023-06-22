import React,{useState} from 'react';
import '../styles/articles.style.css';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';

export const Article = ({data}) => {
    const arti = data;
    const loadImg='https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';

    const likefunc=()=>{
      //window.alert('clicked');
      if(liked){setLike(false)}
      else{setLike(true)}
    }
    var [liked, setLike] = useState(true);
    return (
    <div className='narticlepost'>
      <img alt={arti.title[0]} src={arti.urlToImage?arti.urlToImage:loadImg} className='postimg'></img>
  
      <div className='nPara'>
        <h1 className='ptitle'>{arti.title}</h1>
  
        <div className='author'><b>Author: </b>{arti.author?arti.author:'unknown'}</div>
        <p className='contentpara'>
           {arti.content?(arti.content).slice(0,200)+" ..." : " "} 
        </p>
        <a className='readMore' href={arti.url} target='_blank'> <b>Read more at {arti.author}</b> </a>
  
      </div>
    <div className='likeview'>
      <span className='liked' onClick={likefunc}>
      {
        liked? <FavoriteSharpIcon/>:<FavoriteBorderSharpIcon/>
      }
      </span>
    </div>
    </div>
    )
}
