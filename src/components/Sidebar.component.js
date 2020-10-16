import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
    render() {
        return (
           
            <div 
                 className={ this.props.opened ? 'open transition duration-500 ease-linear sidebar flex right-0 flex-col justify-evenly absolute text-center bg-gray-900 text-white z-10' : 'close hidden' }    
            >
                <Link className="px-4" onClick={this.onClickHome} to="/">Home</Link>
                <Link className="px-4" >Sanitaryware</Link>
                <Link className="px-4" onClick={this.onClickAbout} to="/about">About us</Link>
                <Link className="px-4" onClick={this.onClickContact} to="/contact">Contact us</Link>
            </div>
    
        
        );
    }
}