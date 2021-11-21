import React from 'react';
import {Form,Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const SignIn = () => {
    return (
        <div>
             <section className="registration">
              <div className="registration__image">
              <img src="/Images/bg-for-login-and-resistration.jpg" />
                <div className="registration__image__form">
                <Form className="registration__image__form--inside">
                <h2 className="registration__image__form--inside__content">Login</h2>
                <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Control type="password" placeholder="Type email address" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Control type="password" placeholder="Type password" />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
   
  </Form.Group>
  <Form.Text className="text-muted" id="text">
     Forgot Password?
    </Form.Text>
  
 
 
  <Button type="submit" className="registration__image__form--inside__content--button">
    Submit
  </Button><br/>
  <Form.Text className="text-muted">
  Don't have a MLAT account?<NavLink to="/registration">Create a new account</NavLink>
    </Form.Text>

</Form>
                </div>
              </div>
            </section>
        </div>
    )
}

export default SignIn
