import React, { Component } from 'react';
import aboutImg from './aboutPicture.svg';
export default class about extends Component {
    render() {
        return (
            <main className="flex justify-around items-center p-10 w-full">
                <div className="flex flex-col w-1/3 text-center" >
                    <h2>About Us</h2>
                    <p className="p-5">Maxcera sanitaryware is a Proprietership firm engaged in trading an excellent quality range of Bathroom Sanitaryware like Water Closets, Designer Basins</p>
                </div>
                <img className="aboutImg"  src={ aboutImg } alt="" />
            </main>
        )
    }
}