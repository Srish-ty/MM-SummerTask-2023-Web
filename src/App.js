import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import { ShowArticle } from "./pages/ShowArticle";

function App() {
  const [showarticle, setShowedart] =  useState('');

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route index element={<Home setShowedart={setShowedart}/>} />
        <Route path="Article" element={<ShowArticle showing={showarticle} />} />
      </Routes>
    </Router>
  );
}

export default App;
