import React, { useState } from 'react';
import './style/form.styles.css';
import { Navbar } from '../components/Navbar';


function ArticleForm() {
  const [title, setTitle] = useState('');
  const [content, setBody] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const articleData = { title:title, content: content, category: category };

    //  add the article
    fetch('http://localhost:8000/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(articleData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error adding article');
      }
      return response.json();
    })
    .then(newArticle => {
      console.log('New article added:', newArticle);
      //window.alert('added!');
    })
    .catch(error => {
      console.error('Error adding article:', error);
    });

    // Reset form fields
    setTitle('');
    setBody('');
    setCategory('');
  };

  return (
    <>
    <Navbar/>
    <div className='form-cont'>
      <h2> Add Article</h2>
    <form onSubmit={handleSubmit} className='arti-form'>
      <div className='inp-part'>
        <label htmlFor="title" className='label'>Title:</label>
        <input className='inps'
          type="text"
          id="title" 
          name='title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </div>
      <div className='inp-part'>
        <label htmlFor="body" className='label'>Content:</label>
        <textarea className='inps'
          id="content"
          name='content'
          value={content}
          onChange={(event) => setBody(event.target.value)}
          rows="4"
          required
        ></textarea>
      </div>
      <div className='inp-part'>
        <label htmlFor="category" className='label'>Category:</label>
        <input className='inps'
          type="text"
          id="category"
          name='category'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
        />
      </div>
      <button type="submit" className='sub'>Add Article</button>
    </form>
    </div>
    </>
  );
}

export default ArticleForm;
