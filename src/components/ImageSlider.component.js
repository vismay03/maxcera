import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import React, { Component } from 'react';
import image1 from './img.comp/1.svg';
import image2 from './img.comp/2.svg';
import image3 from './img.comp/3.svg';



export default class ImageSlider extends Component {
    render() {
       var imgs = [ image1, image2, image3 ];
        return (
            <div>
                <AliceCarousel className="w-full mx-auto" infinite autoPlay disableDotsControls="true" disableButtonsControls="true" autoPlayInterval="2000">
                    { imgs.map ( img => <img src={ img } className="sliderimg" alt=""/> ) }
                </AliceCarousel>
            </div>
        );
    }
}