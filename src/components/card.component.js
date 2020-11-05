import React, { Component } from 'react';

export default class card extends Component  {
    render() {
    return(
            <div className="imageCard shadow-md border bg-white m-4 p-2 w-56" key={this.props.key} >
                <img className="w-56 h-56" src={this.props.image} alt=""/>
                <h3 className="text-base lowercase text-open-sans"> Name: <span className="text-lato" >{this.props.name }</span></h3>
                <h3 className="text-base lowercase text-open-sans" >Model: <span className="text-lato" >{this.props.model}</span></h3>
                <h3 className="text-base lowercase text-open-sans"> Size: <span className="text-lato">{this.props.size}</span></h3>
            </div>
        );
    }
}
