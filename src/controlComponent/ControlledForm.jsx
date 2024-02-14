import React, { Component } from 'react'

export default class ControlledForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: "",
        }
    }
    handleChange = (e) => {
        console.log(e)
        console.log(e.target.value)
        this.setState({
            // name: e.target.value.toUpperCase()
            // name: e.target.value.toLowerCase()
            name: e.target.value.substring(0,7).toLowerCase()   // apply limit
        })
    }
    handleSubmit= (e)=>{
        e.preventDefault()
        console.log(e)
        console.log("Input field value: ", e.target[0].value)
        console.log("Button field value: ", e.target[1].value)
    }

    render() {
        return (
            <>
                <div>
                    <form action="" onSubmit={this.handleSubmit}>
                        <label htmlFor="">Name</label>
                        <input type="text" onChange={this.handleChange}  value={this.state.name} /><br /> <br />
                        <input type="submit" value="Submit" id="" />
                    </form>
                </div>
                <div>
                    {this.state.name}
                </div>
            </>
        )
    }
}
