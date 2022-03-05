import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CreateItem from './CreateItem';
import Item from './Item';
import Profile from './Profile';
import Navbar  from './Navbar';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/CreateItem" element={<CreateItem />} />
    <Route path="/Item" element={<Item />} /> 
    <Route path="/Footer" element={<Footer />} />
    <Route path="/Navbar" element={<Navbar />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
