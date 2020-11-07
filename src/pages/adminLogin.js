import React from 'react';
import axios from 'axios';
import { Redirect  } from 'react-router-dom';
import { login } from './utils/in';

export default class adminLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: [],
            username: "",
            password: "" ,
            
        }
      
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }    



    componentDidMount() {
        axios.get('/adminlogin')
        .then(r=>{
            this.setState({
                login: r.data,
            })
        })
       
   
    }


    onFormSubmit = (e, props) => {
      
           e.preventDefault();
           if(this.state.login[0].username === this.state.username && this.state.login[0].password === this.state.password)  {
           login()
           console.log(true)
           this.props.history.push('/admin')

            
            }
            else{
                this.props.history.push('/adminLogin')
            }
           
         
            
        

        
    }   

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value,
        })
    }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value,
        })
    }


    render() {
        return (
            <div className="flex flex-col py-48 justify-center items-center" >
                  <h2 className="text-lato p-2 uppercase text-xl place-self-center" >Admin</h2>
                <form className="flex flex-col">
                    <input className="py-1 px-2 border m-2  border-gray-400 placeholder-gray-500"  onChange={this.onChangeUsername}  placeholder="username"  type="text" />
                    <input className="border m-2 py-1 px-2 border-gray-400 placeholder-gray-500" onChange={this.onChangePassword}  placeholder="password" type="password" />
                    <button className="text-lato m-2 text-base border-gray-400 text-white hover:bg-orange-600 bg-orange-500  py-1 px-2 " onClick={this.onFormSubmit} type="button" >login</button> 
                </form>
               
                { this.state.isLogin ? 
                    <Redirect from="/adminLogin" to="/admin" />
                    :
                    <Redirect from="/admin" to="/adminLogin" /> 
                }
                {/* <onLogin open={this.state.isLogin} /> */}

            </div>
        );
    }
}