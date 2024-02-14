import React, { Component } from 'react'

export default class Updating5 extends Component {
    componentWillUnmount(){
        console.log('componentWillUnmount() called...')
    }
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div>
        <h4>This id Child class</h4>
      </div>
    )
  }
}
