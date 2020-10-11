import React from 'react';
import './App.css';
import logo from  './logo.svg';
import './tailwind.output.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import about  from './pages/about';
import contact  from './pages/contact';
import "Polygon1.svg";
import ImageSlider from './components/ImageSlider.component';
import Category from './components/Category.component';
import Footer from './components/Footer.component';
function App() {
  return (
    <Router>
      <div className="App">

        <header className="flex justify-around bg-black uppercase text-right text-white" >
          <img src={logo} className="logo w-50 h-18" alt=""/>
          <div className="flex text-center w-30 p-8"> 
            <Link className="px-4" to="/">Home</Link>
            <Link className="px-4" >Sanitaryware</Link>
            <a href="./pages/about"> About </a>
            {/* <Link className="px-4" to="/about">About us</Link> */}
            <Link className="px-4" to="/contact">Contact us</Link>
          </div>
        </header>
        <div className="">
          <div className="bg-svg1 w-full">
          <ImageSlider/>
          <span className="cta absolute text-5xl text-white">  Explore your different design of sanitary ware</span>
          
          </div>
          <div className="bg-svg2 grid place-items-center">
            <div className="companyIntro">
            <h2 className="text-red-700" >WELCOME TO MAXCERA SANITARYWARE</h2>
            <p className="my-6 opacity-75">
              Maxcera sanitaryware is a Proprietership firm engaged in trading an excellent quality range of Bathroom 
              Sanitaryware like Water Closets, Designer Basins 
            </p>
            <a href="/about" className="bg-red-700 text-sm px-8 mt-10 py-2 text-white hover:bg-red-900 ">READ MORE</a>
  
            </div>
           
          </div>
        
        </div>
      
        <div className="mt-16 w-full flex justify-center items-center flex-col" >
        <h3 className="text-2xl text-center text-red-800 uppercase">Our <span className="font-bold">Products</span></h3>
        <Category/>
        </div>

        <Footer /> 
      
        <Route path="/about" component={about} />
        <Route path="/contact" component={contact} />
        
      </div>
    </Router>
  );
}


export default App;
