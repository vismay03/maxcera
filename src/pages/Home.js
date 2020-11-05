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
                        <span className="cta absolute text-center text-2xl sm:text-5xl w-2 font-mdbold text-white">  Explore your <span className="text-red-600" >different</span>  design of sanitary ware</span>
                        </div>    
                </div>
        <Intro/>
        <div className="mt-16 w-full flex justify-center items-center flex-col" >
        <h3 className="text-2xl text-center text-red-800 uppercase">Our <span className="font-bold">Products</span></h3>
        <Category/>
        </div>
        </div> 
        )
    
}