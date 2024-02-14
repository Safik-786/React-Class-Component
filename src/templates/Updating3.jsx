import React, { Component } from 'react'

export default class Updating3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Adil'
      }
      console.log('constructor called')
    }
    changeState= ()=>{
        console.log('btn Clicked..')
        this.setState({
            name:"Safik"
        })
    } 
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps called....')
        console.log('state: ',state)
        console.log('props:', props)
        return null
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate() called....")
        console.log(nextProps)
        console.log(nextState)
        // return false
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate() called ...')
        console.log(prevProps)
        console.log(prevState)
        return 'Hello'
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate() called ...')
        console.log(prevProps)
        console.log(prevState)
        console.log(snapshot)
    }
  render() {
    console.log('render() called...')
    return (
      <div>
        <h3> { this.state.name} </h3>
        <h3> { this.props.city} </h3>
        <button onClick={this.changeState}>Change State</button>
      </div>
    )
  }
}
