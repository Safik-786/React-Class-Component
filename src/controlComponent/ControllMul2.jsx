import React, { Component } from 'react'

export default class ControllMul2 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name:"",
           email:""
        }
      }
      handleChange=(e)=>{
        const name=  e.target.name
        console.log(name)
        const value=  e.target.value 
        console.log(value)

//      Validation
        let new_val= (name === 'email') ? value.toLowerCase() : value.substring(0, 7) ;
    
        this.setState({
            [name] : new_val
        })
      }
      handleSubmit= (e)=>{
        e.preventDefault()
        console.log(e)
        console.log(this.state.name)
        console.log(this.state.email)
        console.log("Input field value: ", e.target[0].value)
        console.log("Button field value: ", e.target[1].value)
      }

  render() {
    return (
        <div>
          <form action="" onSubmit={this.handleSubmit}>
              <label htmlFor="name">Enter Name: </label>
              <input type="text" id='name' placeholder='Enter Your name' name='name' onChange={this.handleChange} value={this.state.name}/> <br /><br />
              <label htmlFor="email">Enter Email: </label>
              <input type="email" id='email' placeholder='Enter Your email' name='email' onChange={this.handleChange} value={this.state.email}/> <br /><br />
              <input type="submit" value="Submit" />
          </form>
        </div>
      )
  }
}
