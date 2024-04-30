import React from 'react';
import {Button} from "react-bootstrap";
import {Alert} from "react-bootstrap";

const SignUp = () => {
  return (
    <>
      <form>
      <input type="text"  placeholder='enter name' />
      </form>
      <Button variant='success' >SignUp</Button>
      <Alert variant={"danger"}>
        This is <Alert.Link  href="https://www.google.com">Google</Alert.Link> a alert box
      </Alert>
    </>
  );
}

export default SignUp;
