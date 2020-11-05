import React from 'react';
import img1 from './img.category/img1.svg';
import img2 from './img.category/img2.svg';
import img3 from './img.category/img3.svg';
import img4 from './img.category/img4.svg';
import img5 from './img.category/img5.svg';
import img6 from './img.category/img6.svg';
import {   Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
export default function Category() {
   
        var categoryImgs = [
                                {
                                    src: img1,
                                    caption: "Wash Basin",
                                    to: "/washbasin" 
                                },
                                {
                                    src: img2,
                                    caption: "Designer Vitrosa Basin Set",
                                    to: "/designerVitrosaBasinSet" 
                                },
                                {
                                    src: img3,
                                    caption: "Water Closet",
                                    to: "/waterClosest"
                                },
                                {
                                    src: img4,
                                    caption: "Toilet Pan",
                                    to: "/toiletPan"
                                },
                                {
                                    src: img5,
                                    caption: "Seat Covers & Accessories",
                                    to: "/seatCoversAndAccessories"
                                },
                                {
                                    src: img6,
                                    caption: "Urinals",
                                    to: "/Urinals"
                                }
                            ];
        return (


            <div className="category m-20  flex flex-wrap justify-center items-center" >
            <Fade right>  
            { categoryImgs.map ( img => { 
                return (
                    <Link to={img.to}>
                    <div className="img-grid flex justify-center items-center">
                        
                        <img src={img.src} alt=""/> 
                            <p className="caption font-medium text-white text-2xl z-10" > { img.caption } </p>
                                <div className="overlay"></div>
                            </div>
                            </Link>
                        )
                    
                   })
            }   
            </Fade>  
            </div>
        );
}

