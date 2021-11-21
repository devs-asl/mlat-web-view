import React from 'react';
import {Form,Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Registration = () => {
    
    return (
        <div>
            <section className="registration">
              <div className="registration__image">
              <img src="/Images/bg-for-login-and-resistration.jpg" />
                <div className="registration__image__form">
                <Form className="registration__image__form--inside">
                <h2 className="registration__image__form--inside__content">Create Account</h2>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Type first name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Control type="password" placeholder="Type last name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Control type="password" placeholder="Type email address" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Control type="password" placeholder="Type password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Control type="password" placeholder="Type confirm password" />
  </Form.Group>
 
  <Button type="submit" className="registration__image__form--inside__content--button">
    Register
  </Button><br/>
  <Form.Text className="text-muted" id="text1">
      Already have an Account?<NavLink to="/signin">Sign in</NavLink>
    </Form.Text>

</Form>
                </div>
              </div>
            </section>
        </div>
    )
}

export default Registration;
