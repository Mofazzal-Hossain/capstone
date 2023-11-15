import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import About from './components/about';
import Contact from './components/contact';
// import Home from './components/home';
import Category from './components/category';
import News from './components/news';
import Header from './components/header';
import Footer from './components/Footer';
import Sample from './components/sample';
import SearchComponent from './components/search';
import Login from './components/login';
import Logout from './components/logout';
// import Categorydb from './components/categorydb';
import CategoryNews from './components/category-news';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <RouterProvider router={router}/>
  // </React.StrictMode>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path='/sample' element={<Sample/>}/>
      <Route path='/' element={<App/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
      {/* <Route path='/home' element={<Home/>}/> */}
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      {/* <Route exact path='/category' element={<Categorydb/>}/> */}
      <Route exact path='/in-category' element={<Category key='general' country='in' category="general"/>}/>
      <Route exact path='/entertainment' element={<Category key='entertainment' country='in' category="entertainment"/>}/>
      <Route exact path='/health' element={<Category key='health' country='in' category="health"/>}/>
      <Route exact path='/science' element={<Category key='science' country='in' category="science"/>}/>
      <Route exact path='/sports' element={<Category key='sports' country='in' category="sports"/>}/>
      <Route exact path='/technology' element={<Category key='technology' country='in' category="technology"/>}/>
      <Route exact path='/business' element={<Category key='business' country='in' category="business"/>}/>
      {/* us country */}
      <Route exact path='/us-general' element={<Category key='general' country='us' category="general"/>}/>
      <Route exact path='/us-entertainment' element={<Category key='entertainment' country='us' category="entertainment"/>}/>
      <Route exact path='/us-health' element={<Category key='health' country='us' category="health"/>}/>
      <Route exact path='/us-science' element={<Category key='science' country='us' category="science"/>}/>
      <Route exact path='/us-sports' element={<Category key='sports' country='us' category="sports"/>}/>
      <Route exact path='/us-technology' element={<Category key='technology' country='us' category="technology"/>}/>
      <Route exact path='/us-business' element={<Category key='business' country='us' category="business"/>}/>
      {/* cn country */}
      <Route exact path='/cn-general' element={<Category key='general' country='cn' category="general"/>}/>
      <Route exact path='/cn-entertainment' element={<Category key='entertainment' country='cn' category="entertainment"/>}/>
      <Route exact path='/cn-health' element={<Category key='health' country='cn' category="health"/>}/>
      <Route exact path='/cn-science' element={<Category key='science' country='cn' category="science"/>}/>
      <Route exact path='/cn-sports' element={<Category key='sports' country='cn' category="sports"/>}/>
      <Route exact path='/cn-technology' element={<Category key='technology' country='cn' category="technology"/>}/>
      <Route exact path='/cn-business' element={<Category key='business' country='cn' category="business"/>}/>
      <Route path='/details/:id' element={<News/>}/>
      <Route path='/category-news/:id' element={<CategoryNews/>}/>
      <Route path='/search' element={<SearchComponent/>}/>
      

    </Routes>
    <Footer/>
  </BrowserRouter>
);
