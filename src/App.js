import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import { ShowArticle } from "./pages/ShowArticle";
import ArticleForm from './pages/ArticleForm';

function App() {
  const [showarticle, setShowedart] =  useState('');
  const [isLoggedIn, setLogged] = useState(true);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home setShowedart={setShowedart} />} />
        <Route index element={<Home setShowedart={setShowedart}/>} />
        <Route path="Article" element={<ShowArticle showing={showarticle} />} />
        <Route path='Dashboard' element={isLoggedIn? <ArticleForm/>:<Home/> }  />
      </Routes>
    </Router>
  );
}

export default App;
