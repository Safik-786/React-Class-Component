import React, { Component } from 'react'
import Mounting2 from './Mounting2'
export default class Mounting1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: this.props
      }
      console.log(" Mounting-1 Constructor() Invoked .")
    }
    static getDerivedStateFromProps(props, state){
        console.log('"Mounting-1 getDerivedStateFromProps() Invoked ."')
        // console.log(props)
        // console.log(state)
        return null
    }
    componentDidMount(){
        console.log("Mounting-1 componentDidMount() Invoked .")
    }
    render() {
      console.log("Mounting-1 Render() Invoked .")
    return (
      <div>
        <h2>{this.props.name}</h2>
        <Mounting2 name='Rahul' />
      </div>
    )
  }
}
