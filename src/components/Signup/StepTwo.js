import React, { useState } from "react";
import { Form, Row} from "react-bootstrap";
import tick from "../../assets/images/tick.png"
import upload from "../../assets/images/upload.png"
import address from "../../assets/images/address.png"



const StepTwo = ({ nextStep, handleFormData, prevStep, values, showhide }) => {

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
              
              <li className="active"></li>

              {showhide != "user" && (
              <li></li>
              )}
        </ul>

        <Form onSubmit={submitFormData} className="login-form">

        <h3>Signup</h3>

        <Row className="justify-content-between">

        {showhide != "doctor" &&  (
        <Form.Group className="form-group col-lg-12 input-icons">
          <Form.Control
            as="textarea" rows={3} 
            name="address"
            defaultValue={values.address}
            placeholder="Address"
            onChange={handleFormData("address")}
          />
           <img src={address}/>
        </Form.Group>
        )}

        <p className="valid-id">Upload a valid ID</p>

        <Form.Group className="form-group col-lg-5 input-icons">
          <Form.Control
            name="front"
            defaultValue={values.front}
            type="file"
            placeholder="Front"
            onChange={handleFormData("front")}
          />
           <img src={tick}/>
        </Form.Group>

        <Form.Group className="form-group col-lg-5 input-icons">
          <Form.Control
            name="back"
            defaultValue={values.back}
            type="file"
            placeholder="back"
            onChange={handleFormData("back")}
          />
          <img src={upload}/>
        </Form.Group>

        </Row>
     
        <div style={{ display: "flex", justifyContent: "space-around" }}>

          <button className="custom-btn secondary-btn step-btn-prev" onClick={prevStep}>
            Back
          </button>

          <button className="custom-btn primary-btn step-btn" type="submit">
            Next
          </button>

        </div>

        

      </Form>
    </div>
    </>
  );
};

export default StepTwo;