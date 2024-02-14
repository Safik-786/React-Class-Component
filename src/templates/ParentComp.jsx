import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class ParentComp extends Component {
    parentMethod=(name, state)=>{
        // alert('Hello from parent Component !!...I am '+ name +" i am From :"+ state)
        alert(`Hello from parent Component !!...I am ${name} i am From :${state}`)
    }
  render() {
    return (
      <div>
        <ChildComp callMethod={this.parentMethod}/>
      </div>
    )
  }
}




