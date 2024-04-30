import React from "react";
const employeeData=[{
    id:123,
    name:"jahnavi",
    location:"hyd",
},{
     id:145,
    name:"Dp",
    location:"chennai",
},
{
    id:786,
    name:"narsi",
    location:"Tamilnadu",

}];
const Employee=()=>{
   return (
    <div>
        <h1>Employee Details</h1>
        <table className="table">
            <thead>
                <tr className="table-active">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr className="table-info">
                    <td>123</td>
                    <td>taj</td>
                    <td>electronics</td>
                    <td>7657840989</td>
                </tr> */}
                {
                    employeeData.length===0?(
                        <tr className="table-danger">
                            <td colSpan={5} style={{textAlign:'center'}}>
                            No records
                            </td></tr>
                    ):(
                        
                        employeeData.map(
                            (value)=>(
                            <tr  className="table-info">
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.location}</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                            </tr>
                            )
                        )
                        
                    )
                }
            </tbody>
        </table>
    </div>
   );
};
export default Employee;