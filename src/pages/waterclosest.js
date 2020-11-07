import React, { Component } from 'react';
import axios from 'axios';
import Card from './../components/card.component';
import { Circle } from 'react-preloaders';
import Pdf from './../components/pdf.component';
export default class waterClosest extends Component {

constructor(props) {
    super(props);
    this.state = {
        products: [],
        loading: true,
        pdfs : [] 
    }
}    

componentDidMount() {
    axios.get('/washbasin'
   
    )
    .then(res=>{
        console.log(res.data);
        this.setState({
            loading: false,
            products: res.data
        })
    })
    
    axios.get('/sendpdf')
    .then(res=>{
        this.setState({    
            pdfs: res.data
        })
    })
}
    

    render() {
               return(
            <main className="flex w-full flex-wrap justify-center items-center" >
                  <Circle customLoading={this.state.loading} />
                
                 <div className="relative w-full " >
                     
                <h2 className="text-itim mt-2 text-center uppercase text-xl" >Water Close</h2>
                { this.state.pdfs.map((pd,i) => (
                    <>    
                    {pd.pdfcategory === "Water closest" ? 
                    <Pdf src={`data:application/pdf;base64, ${pd.pdf}`} category={pd.category} />
                    :    
                    ""
            }   
        </>
                ))
                }

                
                </div>
                {this.state.products.map( (product,index) => (
                <div>    
                        {product.category === "Water closest" ?  
                                
                                    <Card key={index} image={`data:image/jpeg;base64, ${product.image}`}  name={product.name}  size={product.size} model={product.model}/>
                                :    
                                ""
                        }   
                </div>
                    )
                )         
            }
            </main>
                    )
            
            
    }}
