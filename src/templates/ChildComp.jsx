// import React, { Component } from 'react'

// export default class ChildComp extends Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.callMethod} >Click</button> &nbsp;
//         <button onClick={()=> this.props.callMethod('Safik MD' , 'Odisha')} >Click</button>
//       </div>
//     )
//   }
// }

import React from 'react'

function ChildComp(props) {
    return (
        <div>
            <button onClick={props.callMethod} >Click</button> &nbsp;
            <button onClick={() => props.callMethod('Safik MD', 'Odisha')} >Click</button>
        </div>
    )
}

export default ChildComp


