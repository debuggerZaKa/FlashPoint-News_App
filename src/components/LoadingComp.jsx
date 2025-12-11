import React, { Component } from 'react'
import loading from './Rhombus.gif'

export class LoadingComp extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading"/>
      </div>
    )
  }
}

export default LoadingComp

