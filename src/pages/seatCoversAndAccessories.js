import React, { Component } from 'react';
import axios from 'axios';
import Card from './../components/card.component';
import { Circle } from 'react-preloaders';
import Pdf from './../components/pdf.component';

export default class seatCoversAndAccessories extends Component {

constructor(props) {
    super(props);
    this.state = {
        products: [] ,
        loading: true
    }
}    

componentDidMount() {
    axios.get('http://localhost:4000/washbasin'
   
    )
    .then(res=>{
        console.log(res.data);
        this.setState({
            loading: false,
            products: res.data
        })
    })
    
    
}
    

    render() {
               return(
            <main className="flex w-full flex-wrap justify-center items-center" >
  <Circle customLoading={this.state.loading} />
  <div className="relative w-full " >
                     
                     <h2 className="text-lato mt-2 text-center uppercase text-xl" >Washbasin</h2>
                     { this.state.pdfs.map((pd,i) => (
                         <>    
                         {pd.pdfcategory === "Seat covers & Accessories" ? 
                         <Pdf src={`data:application/pdf;base64, ${pd.pdf}`} category={pd.category} />
                         :    
                         ""
                 }   
             </>
                     ))
                     }
     
                     
                     </div>
                {this.state.products.map( product => (
                <div>    
                        {product.category === "Seat covers & Accessories" ?  
                                
                                    <Card image={`data:image/jpeg;base64, ${product.image}`}  name={product.name}  size={product.size} model={product.model}/>
                                :    
                                ""
                        }   
                </div>
                ))}
            </main>
)
            
            
    }}
