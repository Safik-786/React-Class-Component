import React, { Component } from 'react'

export default class Updating2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name2: this.props.name
      }
    }
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps called...')
        if(props.name === state.name2){
            return null; 
        }else{
            return {name2: props.name}
        }
    }
    
  render() {
    return (
      <div>
        <h3>{this.state.name2}</h3>
      </div>
    )
  }
}
