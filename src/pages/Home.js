import  React  from 'react';

import ImageSlider from '../components/ImageSlider.component';
import Category from '../components/Category.component';
import Intro from '../components/Intro.component';
export default function Home() {
        return(
            <div className="main">
                <div className="bg-svg1 w-full">
                        <div className="hideOnAbout">
                        <ImageSlider/>
                        <span className="cta absolute text-center text-3xl w-3 sm:text-5xl font-mdbold text-white text-oswald">  Explore your <span className="text-red-600" >different</span>  design of sanitary ware</span>
                        </div>    
                </div>
        <Intro/>
        <div className="mt-16 w-full flex justify-center items-center flex-col" >
        <h3 className="text-3xl text-center text-red-800 uppercase text-open-sans">Our <span className="font-bold text-open-sans">Products</span></h3>
        <Category/>
        </div>
        </div> 
        )
    
}