import React from "react";
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../../Layouts/Footer/Footer";
import Header from "../../Layouts/Header/Header";
import "./Registration.css";

const Registration = () => {
  return (
      <>
        <Header></Header>
        <section className="registration">
            <div className="registration__image text-center" id="registration">

            <Form className="registration__image__form--inside">
                <h2 className="pb-4 registration__image__form--inside__content">
                Create Account
                </h2>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="email" placeholder="Type first name" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="lname" placeholder="Type last name" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="email" placeholder="Type email address" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Type password" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control
                    type="password"
                    placeholder="Type confirm password"
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <Form.Text className="text-muted" id="text">
                Forgot Password?
                </Form.Text>

                <Button
                type="submit"
                className="registration__image__form--inside__content--button"
                >
                Register
                </Button>
                <br />
                <Form.Text className="mb-3 text-muted pt-3">
                Already have an Account?<NavLink to="/login">Sign in</NavLink>
                </Form.Text>
            </Form>
            </div>
        </section>
        <Footer></Footer>
    </>
  );
};

export default Registration;
