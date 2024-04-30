import React from 'react';
import { useContext } from 'react';
import { UserContext } from './ComponentA';
// import { LevelContext } from '..';

// const ComponentD = ({test}) => {
//   return (
//     <div>
//       ComponentD {test}
             
//     </div>
//   )
// }

// const ComponentD = () => {
//     // const context=useContext(LevelContext);
//     const {name}=useContext(LevelContext);
//     console.log(name);
//     return (
//       <div>
//         ComponentD {name}
               
//       </div>
//     )
//   }
const ComponentD = () => {
        const {name,setName}=useContext(UserContext)
    return (
      <div>
        ComponentD {name}
        <form>
            <input type="text" placeholder='enter input value' value={name} onChange={(e)=>{setName(e.currentTarget.value)}}/>
        </form>
      </div>
    )
  }

export default ComponentD
