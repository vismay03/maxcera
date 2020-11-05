import React, { Component } from 'react';
import aboutImg from './aboutPicture.svg';
import {Circle} from 'react-preloaders';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
export default class about extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }


    componentDidMount(){
        this.setState({ loading: false })
    }


    render() {
        
        return (
            <main className="flex flex-col w-full">
                 <Circle time={2000} customLoading={this.state.loading} />
               <div className="aboutImage text-white flex justify-center pl-16 flex-col">
                <Flip left>
               <h3 className="text-4xl font-semibold uppercase" >about us</h3>
               <p className="text-1xl">Established in the year 2016 at Morbi, Gujarat</p>
               </Flip>
               </div> 

               <div className="flex flex-wrap-reverse justify-around items-center p-12 w-full" >
               <Slide left>
                    <div className="flex flex-col  sm:w-1/3">
                        <h3 className="text-3xl font-semibold" >We are manufacturing sanitary ware since 2016</h3>
                        <p className="mt-8">Maxcera sanitaryware is a Proprietership firm manufacturing an excellent quality range of Bathroom Sanitaryware like Water Closets, Designer Basins, Toilet Pans and Seat Covers etc </p>
                        <p className="my-8" >These products are sourced from reliable market vendors and can be availed by our clients at resonable prices.</p>
                        <p>Under the guidences of our mentor "Mr. Mitesh, Who holds profound knowledge and experience in this domain, we have been able to aptly satisfy our clients.</p>
                    </div>
                </Slide>
                <Slide right>
                <img className="aboutImg"  src={ aboutImg } alt="" />
                </Slide>
                </div> 
            </main>
        )
    }
}