import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
export default class Intro extends Component {
    render() {
        return (
            <div className="bg-svg2 grid place-items-center text-center">
            <Fade left>  
            <div className="companyIntro">
            <h2 className="text-red-700" >WELCOME TO MAXCERA SANITARYWARE</h2>
            <p className="my-6 opacity-75">
              Maxcera sanitaryware is a Proprietership firm engaged in trading an excellent quality range of Bathroom 
              Sanitaryware like Water Closets, Designer Basins 
            </p>
            <a href="/about" className="bg-red-700 text-sm px-8 mt-10 py-2 text-white hover:bg-red-900 ">READ MORE</a>
  
            </div>
           </Fade>
          </div>
        )
    }
}