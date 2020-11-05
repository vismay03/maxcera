import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import deleteProduct from './adminAction/delete';
import add from './adminAction/add';
import edit from './adminAction/edit';
import { logout } from './utils/in';
import addpdf from './adminAction/addpdf';

export default class admin extends Component {

    onClickLogout = () => {
        logout();
        // <Redirect to="/adminLogin" />
    }

    render() {
        return (
            <div>
                <div className="text-leto flex py-2 lowercase justify-center items-center">
                    <Link className="text-lato border bg-white py-1 px-2"  to="/admin" >add</Link>
                    <Link className="text-lato border bg-white py-1 px-2" to="/admin/delete">delete</Link>
                    <Link className="text-lato border bg-white py-1 px-2" to="/admin/edit">edit</Link>
                    <button className="text-lato border bg-white py-1 px-2" onClick={this.onClickLogout} >Logout</button>
                </div>
                
            <Switch>
                <Route exact path="/admin" component={add} />
                <Route path="/admin/delete" component={deleteProduct} />
                <Route path="/admin/edit" component={edit} />
            </Switch>

            </div>
        )
    }
}