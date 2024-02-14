import React, { Component } from 'react'

class StateManage extends Component{
    constructor(props){
        super(props)
        this.state={
            name: this.props.name,
            count:  0
        }
    }
    handleClick(){
        if(this.state.name === 'Safik mahammad'){
            this.setState({
                name:"Sohel Akhtar",
            })
        }
        else{
            this.setState({
                name:'Safik mahammad',
            })
        }
    }
    handleCount(){
        this.setState({
            count: this.state.count + 1

        })
    }
    render(){
        return(
            <>
                <h2>{ this.state.name }</h2>
                <h2>count: { this.state.count }</h2>
                <button style={{backgroundColor:"magenta", border:"1px solid black", color:'white', padding:'4px  10px', borderRadius:'5px',margin:"0 10px"}} onClick={ () => this.handleClick() }>Click</button>
                <button style={{backgroundColor:"magenta", border:"1px solid black", color:'white', padding:'4px  10px', borderRadius:'5px'}} onClick={ () => this.handleCount() }>Incr</button>
            </>
        )
    }
}
export default StateManage