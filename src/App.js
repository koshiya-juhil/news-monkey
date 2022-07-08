import './App.css';
import React from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<News key="general" apiKey={apiKey} country="in" category="general" />}></Route>
        <Route path="/business" element={<News key="business" apiKey={apiKey} country="in" category="business" />}></Route>
        <Route path="/entertainment" element={<News key="entertainment" apiKey={apiKey} country="in" category="entertainment" />}></Route>
        <Route path="/general" element={<News key="general" apiKey={apiKey} country="in" category="general" />}></Route>
        <Route path="/health" element={<News key="health" apiKey={apiKey} country="in" category="health" />}></Route>
        <Route path="/science" element={<News key="science" apiKey={apiKey} country="in" category="science" />}></Route>
        <Route path="/sports" element={<News key="sport" apiKey={apiKey} country="in" category="sports" />}></Route>
        <Route path="/technology" element={<News key="technology" apiKey={apiKey} country="in" category="technology" />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App