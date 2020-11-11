import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProfileOne from "../Profile/ProfileOne"
import Table from "../Table/Table"
export default class RouterUrl extends Component {
    render() {
        return (
            <div>
                <Route exact path="/crm" component = {Table}></Route>
                <Route exact path="/crm/profileone" component = {ProfileOne}></Route> 
            </div>
        )
    }
}
