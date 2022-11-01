import React, { useState } from "react";
import { Form } from "react-bootstrap";
import address from "../../assets/images/address.png"

const StepOne = ({ nextStep, handleFormData, values,showhide,handleshowhide }) => {


  
  const submitFormData = (e) => {
    e.preventDefault();
      nextStep();
  };

  

  return (
    <div>

            <ul className="form-dots">
              
              <li className="active"></li>

              {showhide != "user" && (
              <li></li>
              )}

              <li></li>

            </ul>
            
      <Form onSubmit={submitFormData} className="login-form">
        <h3>Signup</h3>

        <div className="usertype-flex">

        <Form.Group className="form-group">
          <Form.Select value={showhide} name="usertype" onChange={(e) => handleshowhide(e)} className="signup-select">
            <option value="">Select User Type</option>
            <option value="doctor">Doctor</option>
            <option value="lab">Lab</option>
            <option value="wholesaler">Wholesaler</option>
            <option value="user">User</option>
          </Form.Select>
        </Form.Group>

        {showhide == "user" && (
        <span className="divider"></span>
        )}

        {showhide == "user" && (

        <Form.Group className="form-group">
          <Form.Select name="gender" className="select">
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Select>
        </Form.Group>

        )}

        </div>  

        {showhide == "doctor" && (
          <Form.Group className="form-group">
            <Form.Control
              name="fullName"
              defaultValue={values.fullName}
              type="text"
              placeholder="Full Name"
              onChange={handleFormData("fullName")}
            />
          </Form.Group>
        )}

        {showhide == "user" && (
          <Form.Group className="form-group">
            <Form.Control
              name="fullName"
              defaultValue={values.fullName}
              type="text"
              placeholder="Full Name"
              onChange={handleFormData("fullName")}
            />
          </Form.Group>
        )}

        {showhide == "doctor" && (
          <Form.Group className="form-group">
            <Form.Control
              name="qualification"
              defaultValue={values.qualification}
              type="text"
              placeholder="Qualification"
              onChange={handleFormData("qualification")}
            />
          </Form.Group>
        )}

        {showhide == "lab" && (
          <Form.Group className="form-group">
            <Form.Control 
              name="labName"
              defaultValue={values.labName}
              type="text"
              placeholder="Lab Name"
              onChange={handleFormData("labName")}
            />
          </Form.Group>
        )}

        {showhide == "wholesaler" && (
          <Form.Group className="form-group">
            <Form.Control
              name="businessName"
              defaultValue={values.businessName}
              type="text"
              placeholder="Business Name"
              onChange={handleFormData("businessName")}
            />
          
          </Form.Group>
        )}


        <Form.Group className="form-group">
          <Form.Control
            name="email"
            defaultValue={values.email}
            type="email"
            placeholder="Valid Email"
            onChange={handleFormData("email")}
          />
        
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Control
            name="phone"
            defaultValue={values.phone}
            type="tel"
            placeholder="Phone Number"
            onChange={handleFormData("phone")}
          />
        </Form.Group>

        {showhide == "user" &&  (
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

        <button className="custom-btn primary-btn step-btn" type="submit">
          Next
        </button>
      </Form>
    </div>
  );
};

export default StepOne;
