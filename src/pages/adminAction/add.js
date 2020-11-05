import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route} from 'react-router-dom';
import deleteProduct from './delete';
export default class add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            category: null,
            name: null,
            model: null,    
            size: null,
            pdfcategory: "",
            pdf: null
        }

        this.onChangeProductCategory = this.onChangeProductCategory.bind(this);
        this.onChangeProductImage = this.onChangeProductImage.bind(this);
        this.onChangeProductModel = this.onChangeProductModel.bind(this);
        this.onChangeProductSize = this.onChangeProductSize.bind(this);
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangePdfCategory = this.onChangePdfCategory.bind(this);
        this.onChangePDF = this.onChangePDF.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onPdfSubmit = this.onPdfSubmit.bind(this);
    }
    onFormSubmit(e) {
        e.preventDefault();
      
        

        const productData = new FormData();
        productData.append('productCategory', this.state.category);
        productData.append('productImage', this.state.image);
        productData.append('productName', this.state.name);
        productData.append('productModel', this.state.model);
        productData.append('productSize', this.state.size);
        axios.post('http://localhost:4000/admin', productData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    onPdfSubmit(e) {
        e.preventDefault();
       
        const productData = new FormData();
        productData.append('pdfCategory', this.state.pdfcategory);
        productData.append('pdfs', this.state.pdf);
        console.log(this.state.pdf);
        axios.post('http://localhost:4000/send', productData)
        .then(res => console.log("gg"))
        .catch(err => console.log("err") )
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

    


    onChangePdfCategory(e) {
        this.setState({
            pdfcategory: e.target.value
        });
    }

    
    onChangePDF(e) {
        
        this.setState({
            pdf:e.target.files[0]
        });
    }

    render() {
        return (
            <div className="flex w-full p-6 justify-around items-center" >
               
               
               
                <form onSubmit={this.onFormSubmit} className="flex w-64 p-5 border border-gray-400 content-evenly flex-col">
                    <h2 className="text-center font-medium text-lato uppercase" >add product</h2>
                    <input className="border m-2 py-1 px-2 border-gray-400 placeholder-gray-500" list="category" value={this.state.category} onChange= {this.onChangeProductCategory} placeholder="Product Category" />
                    <datalist id="category">
                        <option value="Washbasin"></option>
                        <option value="Designer vitrosa basin set"></option> 
                        <option value="Water closest"></option>
                        <option value="Toilet pan"></option>
                        <option value="Seat covers & Accessories"></option>
                        <option value="Urinals"></option>
                    </datalist>
                    <input className="border focus:border-gray-600 m-2 py-1 px-2 border-gray-400 placeholder-gray-500" type="text" value={this.state.name  || ''} onChange= {this.onChangeProductName} placeholder="Product Name" />
                    <input className="border m-2 py-1 px-2 border-gray-400 placeholder-gray-500" type="text" value={this.state.model  || ''} onChange= {this.onChangeProductModel} placeholder="Product Model" />
                    <input className="border m-2 py-1 px-2 border-gray-400 placeholder-gray-500" type="text" value={this.state.size  || ''} onChange= {this.onChangeProductSize} placeholder="Product Size" />
                    <input className="m-2  placeholder-gray-500" border-gray-400 type="file" name="image"  onChange= {this.onChangeProductImage} placeholder="Product Image"/>
                    <button className="text-lato m-2 text-sm border-gray-400 text-white hover:bg-orange-600 bg-orange-500  py-1 px-2 " type="submit">Upload</button> 

                </form>
                <form onSubmit={this.onPdfSubmit} className="flex w-64 p-3 border border-gray-400 content-evenly flex-col" >
                    <h2 className="text-center uppercase text-lato" >add pdf</h2>
                    <input className="border border-gray-400 m-2 py-1 px-2 placeholder-gray-500" list="category" value={this.state.pdfCategory} onChange= {this.onChangePdfCategory} placeholder="PDF Category" />
                    <datalist id="category">
                        <option value="Washbasin"></option>
                        <option value="Designer vitrosa basin set"></option>
                        <option value="Water closest"></option>
                        <option value="Toilet pan"></option>
                        <option value="Seat covers & Accessories"></option>
                        <option value="Urinals"></option>
                    </datalist>
                    <input className="m-2 border-gray-400 placeholder-gray-500" type="file" name="pdf"  onChange= {this.onChangePDF} placeholder="PDF Image"/>
                    <button className="text-lato m-2 text-sm text-white hover:bg-orange-600  bg-orange-500  py-1 px-2 " type="submit">Upload</button> 

                </form>
                
                <Switch>
                    {/* <Route path="/adminPanel/add" component={add} /> */}
                    <Route path="/adminPanel/delete" component={deleteProduct} />
                </Switch>
                </div>
        )
    }

}