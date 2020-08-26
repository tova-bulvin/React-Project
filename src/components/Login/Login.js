/**
 * react form with formik library
 * login form
 */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import { render } from "@testing-library/react";
import "./Login.css"

const loginSchema = yup.object().shape({
    email: yup.string().required('This field is required').email('Bad email forms'),
    password: yup.string().required('This field is required').min(4, "more than 4 characters").max(8,"less than 8 characters")
});


export default ({todofunc})=>{
    const handleSubmit = (values) => {
        console.log(values);
        if(values.email=="tovi27818@gmail.com" && values.password=="tovi"){
            todofunc(2);
        }
    }
    const newUserClick=()=>{
        todofunc(4);
    }
    return (
        <Formik
            initialValues={ {email: 'example@gmail.com', password: ''} }
            onSubmit={handleSubmit}
            validationSchema={loginSchema}
        >
            <div className="wrap-main-login">
                <div className="main-login">
                    <h3>first, call us your user</h3>
                    <Form noValidate>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <Field className="form-control" type="email" name="email" id="email" />
                            <ErrorMessage name="email" className="alert alert-danger" component="div" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">be quiet! enter password</label>
                            <Field className="form-control" type="password" name="password" />
                            <ErrorMessage name="password" className="alert alert-danger" component="div" />
                        </div>
                        <div className="btn-class">
                            <div className="form-group">
                                <button className="btn btn-primary" type="submit">Submit</button>
                                <button className="btn btn-primary" type="button" onClick={newUserClick}>New user</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </Formik>
    )
}
