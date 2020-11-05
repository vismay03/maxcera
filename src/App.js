import React, { Component } from 'react';
import './App.css';
import logo from  './logo.svg';
import './tailwind.output.css';
import {  BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import about  from './pages/about';
import contact  from './pages/contact';
import Home from './pages/Home';
import "Polygon1.svg";
import Footer from './components/Footer.component';
import Menu from './components/icon.footer/navmenu.svg';
import Close from './components/icon.footer/close-logo.svg';
import washbasin from './pages/washbasin';
import designerVitrosaBasinSet from './pages/designerVitrosaBasinSet';
import waterClosest from './pages/waterclosest';
import toiletPan from './pages/toiletpan';
import seatCoversAndAccessories from './pages/seatCoversAndAccessories';
import Urinals from './pages/urinals';
import adminLogin from './pages/adminLogin';
import admin from './pages/admin';
import {Circle} from 'react-preloaders';
import PrivateRoute from  './components/PrivateRoute';

class App  extends Component {

constructor(props) {
  super(props);
  this.state = {
    show: true,
    opened: false,
  
  }
}



onClickAbout = () => {
  this.setState( { show:false } );
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
        {/* <Circle time={3000} /> */}
        <header className="header flex sm:justify-around justify-between bg-black uppercase text-right text-white" >
          <img src={logo} className="logo ml-4 h-15 " alt=""/>
            { this.state.opened ? 
            <img src={Close} onClick={ this.sidebarClose } className="c self-center absolute right-0 mr-4 sm:hidden block z-20 " alt=""/>
            :
            <img src={ Menu } onClick={ this.sidebarOpen } className=" absolute right-0 self-center mr-4 sm:hidden block z-20" alt=""/>
            }
          <div className="sm:flex hidden text-center flex-wrap p-8"> 
            <Link className="px-4" onClick={this.onClickHome} to="/">Home</Link>
            <Link className="px-4" >Sanitaryware</Link>
            <Link className="px-4" onClick={this.onClickAbout} to="/about">About us</Link>
            <Link className="px-4" onClick={this.onClickContact} to="/contact">Contact us</Link>
          </div>
        </header>
        <div className={ this.state.opened ? 'open transition duration-500 ease-linear sidebar flex right-0 mt-20 flex-col justify-evenly absolute text-center bg-red-700 text-white z-10' : 'close hidden' } >
          <Link className="px-4" onClick={this.onClickHome} to="/">Home</Link>
          <Link className="px-4" >Sanitaryware</Link>
          <NavLink className="px-4" onClick={this.onClickAbout} to="/about">About us</NavLink>
          <Link className="px-4" onClick={this.onClickContact} to="/contact">Contact us</Link>
        </div>        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={about} />

          <Route path="/contact" component={contact} />
          <PrivateRoute component={admin} path="/admin"/>
          <Route path="/washbasin" component={washbasin} />
          <Route path="/designerVitrosaBasinSet" component={designerVitrosaBasinSet} />
          <Route path="/waterClosest" component={waterClosest} />
          <Route path="/toiletPan" component={toiletPan} />
          <Route path="/seatCoversAndAccessories" component={seatCoversAndAccessories} />
          <Route path="/Urinals" component={Urinals} />
          <Route path="/adminLogin" component={adminLogin}  />
        </Switch>
        <Footer />  
      </div>
    </BrowserRouter>
    );
  }
}
export default App;
