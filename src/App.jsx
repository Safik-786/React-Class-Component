import { useState } from 'react'
import MyClass from './templates/MyClass'
import StateManage from './templates/StateManage'
import BindingEvent from './templates/BindingEvent'
import Mounting1 from './templates/Mounting1'
import Updating1 from './templates/Updating1'
import Updating3 from './templates/Updating3'
import Updating4 from './templates/Updating4'
import ParentComp from './templates/ParentComp'
import ControlledForm from './controlComponent/ControlledForm'
import ControllMul1 from './controlComponent/ControllMul1'
import ControllMul2 from './controlComponent/ControllMul2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MyClass name='safik' age='21'/> */}
      {/* <StateManage name='Safik mahammad' /> */}
      {/* <BindingEvent/> */}
      {/* <Mounting1 name='Safik'/> */}
      {/* <Updating1/> */}
      {/* <Updating3 city='hyderabad'/> */}
      {/* <Updating4/> */}
      {/* <ParentComp/> */}


      <ControlledForm/>
      <hr />
      <h4>Approach 1</h4>
      <ControllMul1/>
      <h4>Approach 2</h4>
      <ControllMul2/>
    </>
  )
}

export default App
