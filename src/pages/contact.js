import React, { Component } from 'react';
import {Circle} from 'react-preloaders';
import axios from 'axios';
export default class contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            name: '',
            email: '',
            message: ''
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMsgChange = this.onMsgChange.bind(this);
        this.submitEmail = this.submitEmail.bind(this);
    }


    componentDidMount(){
        this.setState({ loading: false })
    }

    submitEmail(e){
        e.preventDefault();
        console.log(this.state.message);
       
        const formData = new FormData();
       
        formData.append('name', this.state.name);
        formData.append('email', this.state.email);
        formData.append('message', this.state.message);

        axios({
            method: "POST", 
            url:"http://localhost:4000/send", 
            data:  this.state
          })
        .then((response)=>{
          if (response.data.status === 'success'){
              alert("Message Sent."); 
              this.resetForm()
          }else if(response.data.status === 'fail'){
              alert("Message failed to send.")
          }
        })
}

    onNameChange(event) {
        console.log(event.target.value);
        this.setState({name: event.target.value})
    }
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
 
    onMsgChange(event) {
        this.setState({message: event.target.value})
    }

    render() {
        return (
            <main className="flex flex-col w-full"  >
                <Circle time={2000} customLoading={this.state.loading} />
                <div className="aboutImage text-white flex justify-center pl-16 flex-col">
                    <h3 className="text-4xl font-semibold uppercase text-oswald " >Contact us</h3>
                    <p className="text-1xl text-open-sans">Established in the year 2016 at Morbi, Gujarat</p>
                </div>
                <div className="w-full flex flex-col py-10 justify-around items-center border"> 
                    <h2 className=" text-2xl py-4 text-center uppercase  text-oswald text-darkorange-600">Contact us</h2>
                    <form className="shadow-md  flex flex-col w-64 p-3 content-evenly border" onSubmit={this.submitEmail}>
                        <input className="border m-2 py-1 px-2 placeholder-gray-500" value={this.state.name} onChange={this.onNameChange} type="text" placeholder="Name" />
                        <input className="border m-2 py-1 px-2 placeholder-gray-500" onChange={this.onEmailChange} type="text" placeholder="Email" />
                        <textarea className="border m-2 py-1 px-2 placeholder-gray-500" onChange={this.onMsgChange} > </textarea>
                        <button className="border m-2 hover:bg-white border-gray-500 bg-gray-300 py-1 px-2 " type="submit">delete</button>
                    </form>
                </div>
            </main>
        )
    }
}