import React, { Component } from 'react';
import  call  from './icon.footer/call-outline.svg';
import location from './icon.footer/location-outline.svg';
import logo from './icon.footer/logo.svg';
import facebook from './icon.footer/logo-facebook.svg';
import instagram from './icon.footer/logo-instagram.svg';
import twitter from './icon.footer/logo-twitter.svg';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer w-full mt-auto">
                <Zoom bottom>
                <div className="contact text-white bg-black">
                    <div>
                        <section className="flex flex-col sm:flex-row" >
                            <section className="flex w-full sm:w-1/2 border-gray-600 border-opacity-50 border-r-2  p-5 justify-around items-center">
                                <img className="sm:w-16 w-12 h-12 sm:h-16"  src={call} alt="" />
                                <section className="flex flex-col m-2">
                                    <h4 className="text-oswald" >CONTACT</h4>
                                    <p className="text-open-sans" >maxceratradelinks@gmail.com</p>
                                    <p className="text-open-sans">+919016161636</p>
                                </section>
                            </section>
                            <section className="w-full sm:w-1/2 border-gray-600 flex p-5 justify-around items-center ">
                                <img className="sm:w-20 w-16 h-16 mr-5 sm:h-20"  src={location} alt="" />
                                <section className="flex flex-col my-2">
                                    <h4 className="text-base mr-12 text-oswald" >LOCATION</h4>
                                    <p className="w-48 text-sm mr-20 text-open-sans"  >Office no. 64-65, Shreenath Complex, Trajpar, Morbi, Gujarat, India</p>
                                </section>
                            </section>
                        </section>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-around flex-wrap bg-gray-900  text-white py-8" >
                    <section className="flex flex-col p-8" >

                        <img className="h-24 w-40" src={logo} alt=""/>
                        <section className=" flex my-2">
                           <span className="p-1 shadow-md bg-opacity-75 bg-purple-200 hover:bg-pink-100" >
                                <img className="w-6 h-6" src={facebook} alt=""/>
                            </span> 
                            <span className="p-1 shadow-md mx-3 bg-opacity-75 bg-purple-200 hover:bg-pink-100">
                                <img className="w-6 h-6" src={instagram} alt=""/>
                            </span> 
                            <span className="p-1 shadow-md bg-opacity-75 bg-purple-200 hover:bg-pink-100">
                                <img className="w-6 h-6" src={twitter} alt=""/>
                            </span> 
                    </section>
                    </section>
                       

                    <section className="py-10 flex flex-col w-1/4">
                    <p className="py-3 text-oswald text-lg" >SANITARY WARE</p>
                    <Link className="text-gray-400 text-open-sans" to="/washbasin">washbasin</Link>
                    <Link className="text-gray-400 text-open-sans"  to="/designerVitrosaBasinSet">Designer Vitrosa Basin Set</Link>
                    <Link className="text-gray-400 text-open-sans"  to="/waterClosest">Water Closest</Link>
                    <Link className="text-gray-400 text-open-sans"  to="/toiletPan">Toilet Pan</Link>
                    <Link className="text-gray-400 text-open-sans"  to="/seatCoversAndAccessories">Seat Covers And Accessories</Link>
                    <Link className="text-gray-400 text-open-sans"  to="/Urinals">Urinals</Link>
                    
                    </section>
                    <section className="py-10 flex flex-col w-1/4">
                    <p className="py-3 text-oswald text-lg" >USEFUL LINKS</p>
                    <Link className="text-gray-400" to="/about">about</Link>
                    <Link className="text-gray-400" to="/contact" >contact</Link>
                    
                    </section>
                </div>

                <div className="text-center text-sm text-lato w-full py-2 bg-gray-900 text-gray-400">
                    &copy; 2020 Maxcera sanitaryware. All rights reserved.
                </div>
            </Zoom>
            </div>
        );
    }
}