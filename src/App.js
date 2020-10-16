import React, { Component } from 'react';
import './App.css';
import logo from  './logo.svg';
import './tailwind.output.css';
import {  BrowserRouter, Route, Link } from "react-router-dom";
import about  from './pages/about';
import contact  from './pages/contact';
import "Polygon1.svg";
// import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui';
import ImageSlider from './components/ImageSlider.component';
import Category from './components/Category.component';
import Footer from './components/Footer.component';
import Intro from './components/Intro.component';
import Menu from './components/icon.footer/navmenu.svg';
import Close from './components/icon.footer/close-logo.svg';
import Sidebar from './components/Sidebar.component';


class App  extends Component {

constructor(props) {
  super(props);
  this.state = {
    show: true,
    opened: false
  }
 
}

onClickAbout = () => {
  this.setState( { show: false } );
}

onClickHome = () => {
  this.setState( { show: true } );
}

onClickContact = () => {
  this.setState( { show: false } );
}


sidebarOpen = () => {
  this.setState( { opened:true } )
}

sidebarClose = () => {
  this.setState( { opened:false } )
}


render() {
  return (
    <BrowserRouter>
      <div className="App">

        <header className="header flex sm:justify-around justify-between bg-black uppercase text-right text-white" >
          <img src={logo} className="logo ml-8 h-18 " alt=""/>
          { this.state.opened ? 
          <img src={Close} onClick={ this.sidebarClose } className="menu absolute right-0 m-4 sm:hidden block z-20 " alt=""/>
          :
          <img src={ Menu } onClick={ this.sidebarOpen } className=" absolute right-0 m-4  sm:hidden block z-20" alt=""/>
}
          <div className="sm:flex hidden text-center flex-wrap p-8"> 
            <Link className="px-4" onClick={this.onClickHome} to="/">Home</Link>
            <Link className="px-4" >Sanitaryware</Link>
            <Link className="px-4" onClick={this.onClickAbout} to="/about">About us</Link>
            <Link className="px-4" onClick={this.onClickContact} to="/contact">Contact us</Link>
          </div>
        </header>
        
        <Sidebar opened = { this.state.opened } />
        
        {  this.state.show === true  ?
      
        <div className="main">
        
          <div className="bg-svg1 w-full">
          
                <div className="hideOnAbout">
                   <ImageSlider/>
                   <span className="cta absolute text-center text-2xl sm:text-5xl w-2 font-mdbold text-white">  Explore your <span className="text-red-600" >different</span>  design of sanitary ware</span>
                </div>    
      
          </div>
        <Intro/>
        
        <div className="mt-16 w-full flex justify-center items-center flex-col" >
        <h3 className="text-2xl text-center text-red-800 uppercase">Our <span className="font-bold">Products</span></h3>
        <Category/>
        </div>
        </div> 
        :
        ""
        }
            <Route path="/about" component={about} />
            <Route path="/contact" component={contact} />
        <Footer />  
      </div>
    </BrowserRouter>
    );
  }
}
export default App;
