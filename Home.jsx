import React from "react";

// import ContactUs from "../function/ContactUs";
class Home extends React.Component{
  constructor(){
    super();
    console.log(this);
  }
  render(){
    return (
      <div class="container">
        <h1>HOME</h1>
        <h2 style={{color:'red',backgroundColor:'greenyellow'}}>{this.props.name}</h2>
        <h1>i am class home</h1>
        {/* <ContactUs /> */}
      </div>
      );
  }
}
export default Home;