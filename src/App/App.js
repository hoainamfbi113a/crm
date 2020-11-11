import React,{Component} from 'react';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom'

import Login from "../components/Login/Login";
// import Crm from "../components/Crm/Crm";
// import Table from "../components/Table/Table";
import ProfileOne from "../components/Profile/ProfileOne";
import Crm from "../components/Crm/Crm";
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
     localStorage.usertoken
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)
export default class App extends Component {
  render() {
    return (
      <Router>
           <Route exact path="/" component={Login} />
           <PrivateRoute path="/crm" component={Crm} />
      </Router>
    )
  }
}