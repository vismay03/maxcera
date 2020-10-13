import React, { Component } from 'react';
import { BrowserRouter as  Link } from "react-router-dom";
import logo from  './logo.svg'; 

export default class Header extends Component {
    render() {
        return (
              <header className="flex justify-around bg-black uppercase text-right text-white" >
          <img src={logo} className="logo w-50 h-18" alt=""/>
          <div className="flex text-center w-30 p-8"> 

            <Link className="px-4" onClick={this.onClickHome} to="/">Home</Link>
            <Link className="px-4" >Sanitaryware</Link>
            <Link className="px-4" onClick={this.onClickAbout} to="/about">About us</Link>
            <Link className="px-4" onClick={this.onClickContact} to="/contact">Contact us</Link>

          </div>
        </header>
        )
    }
}