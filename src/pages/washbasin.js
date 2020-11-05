import React, { Component } from 'react';
import axios from 'axios';
import Card from './../components/card.component';
import { Circle } from 'react-preloaders';
import Pdf from './../components/pdf.component';
export default class washbasin extends Component {

constructor(props) {
    super(props);
    this.state = {
        products: [],
        loading: true ,
        pdfs : [],
    }
}    

componentDidMount() {
    axios.get('http://localhost:4000/washbasin')
    .then(res=>{
       
        this.setState({
            loading: false,
            products: res.data
        })
    })
    
    axios.get('http://localhost:4000/sendpdf')
    .then(res=>{
        this.setState({    
            pdfs: res.data
        })
    })
    
}
    

    render() {
               return(

            <main className="flex flex-col flex-wrap justify-center items-center" >
                 <Circle   customLoading={this.state.loading} />
                 <div className="relative w-full " >
                     
                <h2 className="text-oswald mt-2 text-center uppercase text-2xl text-orange-900" >Washbasin</h2>
                { this.state.pdfs.map((pd,i) => (
                    <>    
                    {pd.pdfcategory === "Washbasin" ? 
                    <Pdf src={`data:application/pdf;base64, ${pd.pdf}`} category={pd.category} />
                    :    
                    ""
            }   
        </>
                ))
                }

                
                </div>
                <div className="flex flex-wrap justify-center items-center">
                {this.state.products.map( (product, index) => (
                    <>    
                        {product.category === "Washbasin" ?  
                                    <Card  key={index} image={`data:image/jpeg;base64, ${product.image}`}  name={product.name}  size={product.size} model={product.model}/>
                                :    
                                ""
                        }   
                    </>
                ))}
        </div>
            </main>
)}}