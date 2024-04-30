import React, { useState } from 'react'
import ComponentB from './ComponentB';
import { createContext } from 'react';

// const ComponentA = ({dataProp}) => {
//   return (
//     <div>
//       ComponentA
//       <ComponentB name={dataProp}/>
//     </div>
//   )
// }
export const UserContext=createContext(null);
const ComponentA = () => {
    const [name,setName]=useState('');
    const useContextValue={name,setName};
    return (
      <UserContext.Provider value={useContextValue} >
        <div>
            ComponentA{name}
            <ComponentB/>
        </div>
      </UserContext.Provider>
    )
  }

export default ComponentA;
