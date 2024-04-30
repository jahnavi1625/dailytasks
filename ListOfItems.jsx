import React from "react";
const ListOfItems=()=>{
    const todoList=[
        "open eyes",
        "Brush teeth",
        "Having Breafast",
        "class",
        "Bath",
    ]
    return (
        <div>
            <h1>ListOfItems</h1>
            {
                todoList.length>0?(
                    <ul>
                        {
                       todoList.map((item,index)=>(
                        <li>{item}</li>
                       ))}
                       </ul>
                    ):<h1>no items</h1>
            }
        </div>
        
    )
}
export default ListOfItems;