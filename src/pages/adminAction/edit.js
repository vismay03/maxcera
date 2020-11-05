import React, { Component } from 'react';
import axios from 'axios';
import { Circle } from 'react-preloaders';

export default class edit extends Component {

constructor(props) {
    super(props);
    this.state = {
        products: [],
        loading: true ,
        name: '',
        model: '',
        size: '',
        category: ''
    }
    this.onChangeProductCategory = this.onChangeProductCategory.bind(this);
    this.onChangeProductImage = this.onChangeProductImage.bind(this);
    this.onChangeProductModel = this.onChangeProductModel.bind(this);
    this.onChangeProductSize = this.onChangeProductSize.bind(this);
    this.onChangeProductName = this.onChangeProductName.bind(this);
}    

componentDidMount() {
    this.setState({loading: false});
  
    
}
    
onChangeProductImage(e) {
      
       

    this.setState({
        image: e.target.files[0]
    });

    

}

onChangeProductName(e) {

    this.setState({
        name: e.target.value
    });
}

onChangeProductModel(e) {
   
    this.setState({
        model: e.target.value
    });
    console.log(e.target.value);
    axios.get('http://localhost:4000/admin/edit/' + e.target.value
   
    )
    .then(res=>{
        console.log(res.data);
      this.setState({
         
          name: res.data.name,
          size: res.data.size,
          category: res.data.category,
          model: res.data.model,
          image: res.data.image

      })
               
    }
       
    )
    
}

onChangeProductSize(e) {
    this.setState({
        size: e.target.value
    });
}

onChangeProductCategory(e) {
    this.setState({
        category: e.target.value
    });
}


onFormSubmit = () => {

    const data = {
        name: this.state.name,
        size: this.state.size,
        category: this.state.category,
        model: this.state.model
    }

    axios.put('http://localhost:4000/admin/edit/' + this.props.match.params.model, data)
    .then((res) => {
      console.log(res.data)
      console.log('Student successfully updated')
    }).catch((error) => {
      console.log(error)
    })

}
    render() {
               return(
            <main className="flex w-full flex-wrap justify-center items-center" >
                  <Circle customLoading={this.state.loading} />

                {/* {this.state.products.map( (product,index) => ( */}
                <div>    
                <form onSubmit={this.onFormSubmit} className="flex w-64 p-5 border border-gray-400 content-evenly flex-col">
                         <input className="border m-2 py-1 px-2 border-gray-400 placeholder-gray-500" list="category" value={this.state.category} onChange= {this.onChangeProductCategory} placeholder="Product Category" />
                    <datalist id="category">
                        <option value="Washbasin"></option>
                        <option value="Designer vitrosa basin set"></option> 
                        <option value="Water closest"></option>
                        <option value="Toilet pan"></option>
                        <option value="Seat covers & Accessories"></option>
                        <option value="Urinals"></option>
                    </datalist>
                    <input className="border focus:border-gray-600 m-2 py-1 px-2 border-gray-400 placeholder-gray-500" type="text" value={this.state.name} onChange= {this.onChangeProductName} placeholder="Product Name" />
                    <input list="model" className="border m-2 py-1 px-2 border-gray-400 placeholder-gray-500" type="text" onChange= {this.onChangeProductModel} placeholder="Product Model" />
                    <datalist id="model">
                        {/* <option value={product.model}></option> */}
                        
                    </datalist>
                    <input className="border m-2 py-1 px-2 border-gray-400 placeholder-gray-500" type="text" value={this.state.size  || ''} onChange= {this.onChangeProductSize} placeholder="Product Size" />
                    <input className="m-2  placeholder-gray-500" border-gray-400 type="file" name="image"  onChange= {this.onChangeProductImage} placeholder="Product Image"/>
                    <button className="text-lato m-2 text-sm border-gray-400 text-white hover:bg-orange-600 bg-orange-500  py-1 px-2 " type="submit">Update</button> 
                    </form>
                </div>

                    {/* )
                )         
            } */}
            </main>
                    )
            
            
    }}
