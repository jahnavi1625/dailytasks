import React from "react";
function ContactUs({name}){
      const h2Style={color:'green',backgroundColor:'skyblue'}
      return (
      <div>
<h1>CONTACT US USING FUNCTION</h1>
<h2 style={h2Style}>{name}</h2>
      </div>
      );
}
export default ContactUs;