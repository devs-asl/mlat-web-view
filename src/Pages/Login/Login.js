import React from "react";
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../../Layouts/Footer/Footer";
import Header from "../../Layouts/Header/Header";
import "./Login.css";

const Login = () => {
  return (

    <>
        <Header></Header>
        <div>
        <section className="registration">
            <div className="registration__image text-center">
                <Form className="registration__image__form--inside">
                    <h2 className="pb-4 registration__image__form--inside__content">
                    Login
                    </h2>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control type="email" placeholder="Type email address" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Type password" />
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
                    Submit
                    </Button>
                    <br />
                    <Form.Text className="mb-3 text-muted pt-3">
                    Don't have a MLAT account?
                    <NavLink to="/registration">Create a new account</NavLink>
                    </Form.Text>
                </Form>
            </div>
        </section>
        </div>
        <Footer></Footer>
    </>
  );
};

export default Login;
