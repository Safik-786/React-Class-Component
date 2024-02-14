import React, { Component } from 'react'

export default class MyClass extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        <h3>my name is {this.props.name}</h3>
        <h3>my age is {this.props.age}</h3>
        <hr />
      </div>
    )
  }
}
