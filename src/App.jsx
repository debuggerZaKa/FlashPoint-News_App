import React, { Component } from 'react';
import Navbar from './components/Navbar.jsx';
import News from './components/News.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
 pgSize = 18;
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/general">
              <News key="general" pageSize={this.pgSize} country="us" category="general"/>
            </Route>
            <Route exact path="/business">
              <News key="business" pageSize={this.pgSize} country="us" category="business"/>
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pageSize={this.pgSize} country="us" category="entertainment"/>
            </Route>
            <Route exact path="/health">
              <News key="health" pageSize={this.pgSize} country="us" category="health"/>
            </Route>
            <Route exact path="/science">
              <News key="science" pageSize={this.pgSize} country="us" category="science"/>
            </Route>
            <Route exact path="/sports">
              <News key="sports" pageSize={this.pgSize} country="us" category="sports"/>
            </Route>
            <Route exact path="/technology">
              <News key="technology" pageSize={this.pgSize} country="us" category="technology"/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}