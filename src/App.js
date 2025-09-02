
import React from 'react';
import './App.css';
import Home from "./components/Home"
import Single from './components/Single';
import Login from './components/login';
import Page1 from './addbusiness/page1';
import Page2 from './addbusiness/page2';
import Page3 from './addbusiness/page3';
import Page4 from './addbusiness/page4';
import Page5 from './addbusiness/page5';
import Page6 from './addbusiness/page6';
import Page7 from './addbusiness/page7';
import Singup from './components/singup';
import Search from './components/search';
import Posts from './components/posts';
import Contact from './components/contact';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pub/:id' element={<Single/>}/>
      <Route path='/Login' element={<Login />} />
      <Route path='/search' element={<Search />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/SingUp' element={<Singup />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/page1' element={<Page1 />} />
      <Route path='/page2' element={<Page2 />} />
      <Route path='/page3' element={<Page3 />} />
      <Route path='/page4' element={<Page4 />} />
      <Route path='/page5' element={<Page5/>} />
      <Route path='/page6' element={<Page6/>} />
      <Route path='/page7' element={<Page7/>} />
    </Routes>
  );
}

export default App;
