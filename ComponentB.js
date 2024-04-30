import React, { useContext } from 'react';
import ComponentC from './ComponentC';
import { UserContext } from './ComponentA';
// import { LevelContext } from '..';

// const ComponentB = ({name}) => {
//   return (
//     <div>
//       ComponentB
//       <ComponentC nameValue={name}/>
//     </div>
//   )
// }
const ComponentB = () => {
    const {name}=useContext(UserContext);
    return (
      <div>
        ComponentB {name}
        <ComponentC/>
      </div>
    )
  }
// const ComponentB = () => {

//     return (
//       <div>
//         ComponentB 
//         <ComponentC/>
//       </div>
//     )
//   }

export default ComponentB;
