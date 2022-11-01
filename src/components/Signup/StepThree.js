import React, { useState } from "react";
import { Form, Row} from "react-bootstrap";
import password from "../../assets/images/password.png"



// creating functional component ans getting props from app.js and destucturing them
const StepThree = ({ nextStep, handleFormData, prevStep, values, showhide }) => {


    // after form submit validating the form data using validator
    const submitFormData = (e) => {
      e.preventDefault();
        nextStep();
    };
  return (
    <>
        <div>

        <ul className="form-dots">

              <li></li>
              
              {showhide != "user" && (
              <li></li>
              )}
              
              <li className="active"></li>


          </ul>
      <Form onSubmit={submitFormData} className="login-form">

        <h3>Signup</h3>

        <Form.Group className="form-group">
          <Form.Control
            name="userName"
            defaultValue={values.userName}
            type="text"
            placeholder="Username"
            onChange={handleFormData("userName")}
          />
        </Form.Group>

        <Form.Group className="form-group input-icons">
          <Form.Control
            name="password"
            defaultValue={values.password}
            type="password"
            placeholder="Password"
            onChange={handleFormData("password")}
          />
          <img src={password}/>
        </Form.Group>

        <Form.Group className="form-group input-icons">
          <Form.Control
            name="confirmPass"
            defaultValue={values.confirmPass}
            type="confirmPass"
            placeholder="Confirm Password"
            onChange={handleFormData("confirmPass")}
          />
          <img src={password}/>
        </Form.Group>
     
        <div style={{ display: "flex", justifyContent: "space-around" }}>

          <button className="custom-btn secondary-btn step-btn-prev" onClick={prevStep}>
            Back
          </button>

          <button className="custom-btn primary-btn step-btn" type="submit">
            Finish
          </button>

        </div>

        

      </Form>
    </div>
    </>
  );
};

export default StepThree;