import React, { Component } from 'react'

export default class BindingEvent extends Component {
    constructor(){
        super()
        // this.handleEvent = this.handleEvent.bind(this)
        this.state ={
            name:"ali"
        }
    }
    // handleEvent(){
    //     console.log('Hello', this)
    //     this.setState({
    //         name:"Safik"
    //     });
    // }

    handleEvent= ()=>{
        if(this.state.name == 'ali'){
            this.setState({
                name:"Safik"
            });
        }else{
            this.setState({
                name:"ali"
            });
        }
    }
  render() {
    return (
      <div>
        <h3>name: {this.state.name} </h3>
        {/* --------------------------way1------------------------------ */}
        <button className='btn btn-warning btn-sm my-5' onClick={ this.handleEvent } > Click</button>


        {/* --------------------------way2------------------------------ */}
        <button className='btn btn-primary btn-sm my-5' onClick={ this.handleEvent.bind(this) } > Click</button>


        {/* --------------------------way3------------------------------ */}
        {/* <button className='btn btn-warning btn-sm my-5' onClick={ ()=> this.handleEvent() } Click</button> */}
        <button className='btn btn-success btn-sm my-5' onClick={ this.handleEvent } > Click</button>
      </div>
    )
  }
}
