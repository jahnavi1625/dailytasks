import React from 'react'
import ComponentD from './ComponentD'

// const ComponentC = ({nameValue}) => {
//   return (
//     <div>
//       ComponentC
//       <ComponentD test={nameValue}/>
//     </div>
//   )
// }
const ComponentC = () => {
    return (
      <div>
        ComponentC
        <ComponentD />
      </div>
    )
  }

export default ComponentC
