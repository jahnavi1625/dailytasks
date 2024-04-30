import React,{useState} from "react";
import List from "./List";
import { useMemo } from "react";

const Home = () => {
  const [number, setNumber] = useState("0");
  const[bgColor,setBgColor]=useState(false);

  const getItems=(number)=>{
    return [number,number+1,number+2];
   }

  // const getItems=useCallback(()=>{
  //  return [number,number+1,number+2];
  // },[number])//everytime called
    
  // const variable=getItems();

  const variable=useMemo(()=>getItems(number),[number]);
  
  // console.log(getItems());
  return (
    <div>
      
        <input
          type="number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <button style={{backgroundColor:bgColor?"#fff":"#000"}} onClick={()=>setBgColor(!bgColor)}>Click</button>
      
      {/* <List value={getItems}/> */}
      <List value={variable}/>
    </div>
  );
};

export default Home;
