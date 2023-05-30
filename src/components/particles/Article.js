import React from 'react'

export const Article = (props) => {
    const arti = props.data;
    const loadImg='https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';
  
    return (
    <div className='nCardContainer'>
      <img alt={arti.title[0]} src={arti.urlToImage?arti.urlToImage:loadImg} className='newImg'></img>
  
      <div className='nPara'>
      <div className='ntitle'>{arti.title}</div>
  
      <div className='author'><b>Author: </b>{arti.author}</div>
        <p className='content'>{arti.content}</p>
        <a className='readMore' href={arti.url}><b>Read more at {arti.author}</b></a>
  
      </div>
    
    </div>
    )
}
