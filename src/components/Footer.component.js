import React, { Component } from 'react';
import  call  from './icon.footer/call-outline.svg';
import location from './icon.footer/location-outline.svg';
import logo from './icon.footer/logo.svg';
import facebook from './icon.footer/logo-facebook.svg';
import instagram from './icon.footer/logo-instagram.svg';
import twitter from './icon.footer/logo-twitter.svg';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer w-full mt-auto">
                <div className="contact text-white bg-black">
                    <div>
                        <section className="flex flex-col sm:flex-row" >
                            <section className="flex w-full sm:w-1/2 border-gray-600 border-opacity-50 border-r-2  p-5 justify-around items-center">
                                <img className="w-12 h-12"  src={call} alt="" />
                                <section className="flex flex-col m-2">
                                    <h4>CONTACT</h4>
                                    <p>maxceratradelinks@gmail.com</p>
                                    <p>+919016161636</p>
                                </section>
                            </section>
                            <section className="w-full sm:w-1/2 border-gray-600 flex p-5 justify-around items-center ">
                                <img className="w-16 h-16"  src={location} alt="" />
                                <section className="">
                                    <h4 className="text-base" >LOCATION</h4>
                                    <p className="w-48 text-sm"  >Office no. 64-65, Shreenath Complex, Trajpar, Morbi, Gujarat, India</p>
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
                       

                    <section className="p-8 w-1/4">
                    <p>SANITARY WARE</p>
                    </section>
                    <section className="p-8 w-1/4">
                    <p>USEFUL LINKS</p>
                    </section>
                </div>

                <div className="text-center w-full py-2 bg-gray-900 text-gray-400">
                    &copy; 2020 Maxcera sanitaryware. All rights reserved.
                </div>

            </div>
        );
    }
}