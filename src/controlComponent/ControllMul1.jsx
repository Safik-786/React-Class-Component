import React, { Component } from 'react'

export default class ControllMul1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"",
         email:""
      }
    }
    handleName=(e)=>{
        this.setState({
            name: e.target.value
        })
    }
    handleEmail=(e)=>{
        this.setState({
            email: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state.name)
        console.log(this.state.email)
        console.log(e.target[0].value)
        console.log(e.target[1].value)
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="name">Enter Name: </label>
            <input type="text" id='name' placeholder='Enter Your name' onChange={this.handleName} value={this.state.name}/> <br /><br />
            <label htmlFor="email">Enter Email: </label>
            <input type="email" id='email' placeholder='Enter Your email' onChange={this.handleEmail} value={this.state.email}/> <br /><br />
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
