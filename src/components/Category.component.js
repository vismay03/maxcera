import React, { Component } from 'react';
import img1 from './img.category/img1.svg';
import img2 from './img.category/img2.svg';
import img3 from './img.category/img3.svg';
import img4 from './img.category/img4.svg';
import img5 from './img.category/img5.svg';
import img6 from './img.category/img6.svg';


export default class Category extends Component {
    render() {
        var categoryImgs = [
                                {
                                    src: img1,
                                    caption: "Wash Basin",
                                },
                                {
                                    src: img2,
                                    caption: "Designer Vitrosa Basin Set",
                                },
                                {
                                    src: img3,
                                    caption: "Water Closet",
                                },
                                {
                                    src: img4,
                                    caption: "Toilet Pan",
                                },
                                {
                                    src: img5,
                                    caption: "Seat Covers & Accessories",
                                },
                                {
                                    src: img6,
                                    caption: "Urinals",
                                }
                            ];
        return (
            <div className="category m-20  flex flex-wrap justify-center items-center" >
            { categoryImgs.map ( img => { 
                return (
                    <div className="img-grid flex justify-center items-center">
                        <img src={img.src} alt=""/> 
                            <p className="caption font-medium text-white text-2xl z-10" > { img.caption } </p>
                                <div className="overlay"></div>
                            </div>
                        )
                   })
            }   
            </div>
        );
    }
}

