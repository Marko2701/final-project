import React, { Component } from 'react';
import { HomePage } from "./Pages/HomePage/HomePage"
import './App.css';
import CandidatePage from "./Pages/CandidatePage/CandidatePage"
import Admin from './Admin'
import { Switch, Route, Redirect } from "react-router-dom"
import { ReportsAdmWizard } from './Admin/Pages/ReportsAdmWizard/ReportsAdmWizard';

import { Login } from "./Components/Login/Login"



class App extends Component {

  state = {
    user: false,
    token: ""
  }

  loginData = (data) => {
    this.setState({
      token: data.accessToken,

    })
  }

  render() {
    return (
      <div id="App">
        <Switch>
          {!this.state.token && <Redirect from="/admin" to="/"></Redirect>}
          <Route path="/loginPage" >
            <Login loginData={this.loginData} token={this.state.token}></Login>
          </Route>
          <Route path="/admin/createReport" >
            <ReportsAdmWizard token={this.state.token}></ReportsAdmWizard>

          </Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/CandidatePage/:id" component={CandidatePage}></Route>
          <Route path="/"><HomePage /> </Route>
        </Switch>
      </div>
    );
  }
}
export default App;