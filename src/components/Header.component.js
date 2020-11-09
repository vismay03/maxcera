import React, { Component } from 'react';
import { BrowserRouter as  Link } from "react-router-dom";
import logo from  './logo.svg'; 

export default class Header extends Component {
    render() {
        return (
              <header className="flex text-oswald justify-around bg-black uppercase text-right text-white" >
         
          <Link className="px-4" to="/">
          <img src={logo} className="logo w-48 h-16" alt=""/>
          </Link>
          <div className="flex text-center w-30 p-8"> 

            <Link className="px-4" to="/">Home</Link>
            <Link className="px-4" >Sanitaryware</Link>
            <Link className="px-4" to="/about">About us</Link>
            <Link className="px-4" to="/contact">Contact us</Link>

          </div>
        </header>
        )
    }
}