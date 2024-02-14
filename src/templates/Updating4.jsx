import React, { Component } from 'react'
import Updating5 from './Updating5'

export default class Updating4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         active: true
      }
    }
    changeState= ()=>{
        this.setState({
            active:false
        })
    }
  render() {
    console.log('parend render() called...')
    return (
      <div>
        {this.state.active ? <Updating5/> : <h1>component Deleted</h1> }
        
        <button onClick={this.changeState}>Change State</button>
      </div>
    )
  }
}
