import axios from 'axios';
import React, {Component} from 'react';

export default class deleteProduct extends Component { 
    
    constructor(props) {
        super(props);
        this.state = {
            model: "",
            category: ""
        }
    }

    onChangeModelName = (e) => {
        this.setState({
            model: e.target.value
        })
    }
    onChangeCategoryName = (e) => {
        this.setState({
            category: e.target.value
        })
    }

    onClickDelete = (e) => {
        e.preventDefault();
        
        console.log(this.state.model);

        axios.delete('http://localhost:4000/washbasin/delete/'+ this.state.model,)
        .then(res=>{
            console.log(res.data);
            this.setState({ 
                products: res.data
            })
            .catch(err=>console.log(err))
        })
    }
    onClickDeletePDF = (e) => {
        e.preventDefault();
        
       

        axios.delete('http://localhost:4000/sendpdf/delete/'+ this.state.category,)
        .then(res=>{
            console.log(res.data);
            this.setState({ 
                products: res.data
            })
            .catch(err=>console.log(err))
        })
    }
    
    render() {
        return (
            <div className="flex my-5  w-full items-center justify-around" >

            <form className="flex w-64 p-3 border items-center justify-center flex-col" >
            <h2 className="text-center font-medium text-lato uppercase" >delete product</h2>
                <input className="border focus:border-gray-600 m-2 py-1 px-2 placeholder-gray-500" type="text" onChange={this.onChangeModelName} placeholder="Product Model" />
                <button className="text-lato m-2 text-sm text-white hover:bg-white  bg-orange-600 py-1 px-2 " type="submit" onClick={this.onClickDelete} >DELETE</button>
            </form>
            <form className="flex w-64 p-3 border items-center justify-center flex-col" >
            <h2 className="text-center font-medium text-lato uppercase" >delete pdf</h2>
                <input className="border focus:border-gray-600 m-2 py-1 px-2 placeholder-gray-500" type="text" onChange={this.onChangeCategoryName} placeholder="PDF Category" />
                <button className="text-lato m-2 text-sm text-white hover:bg-white  bg-orange-600 py-1 px-2 " type="submit" onClick={this.onClickDeletePDF} >DELETE</button>
            </form>
            </div>
        )
    }
}