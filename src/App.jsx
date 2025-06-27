import React, { Component } from 'react'
import Navbar from './components/Navbar.jsx';
import News from './components/News.jsx';
export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
  <News/>
      </div>
    )
  }
}