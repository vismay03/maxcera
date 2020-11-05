import React, { Component } from 'react';

export default class Pdf extends Component  {
    render() {
    return(
            <div className="text-lato mr-10 mt-12 absolute top-0 right-0" key={this.props.key} >
                <a href={this.props.src} className="py-2 px-4 bg-red-700 text-white" download="Washbasin">Download Washbasin</a>
            </div>
        );
    }
}
