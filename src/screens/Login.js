import { Container, Row,Col,Form,Button } from "react-bootstrap";
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";
import { Leftslider } from "../components";
import { useState } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";



function Login(){


    const [userlogintype, Setuserlogintype] = useState("");

    const handleredirect = (e) => {
        const getuser = e.target.value;
        Setuserlogintype(getuser);
    };

    return(

        <>

            <div className="login">

                <Container fluid className="h-100">

                    <Row className="h-100">

                        <Col lg={6}>

                            <Leftslider/>
                            
                        </Col>

                        <Col lg={6}>

                            <div className="login-right">

                                <div className="login-logo">
                                    <img src={logo}/>
                                </div>

                                <Form className="login-form" 
                                action = {(userlogintype == "user" && ("/") ||
                                 userlogintype == "doctor" && ("/dashboard/doctor") || 
                                 userlogintype == "lab" && ("/dashboard/lab") || 
                                 userlogintype == "wholesaler" && ("/dashboard") ||
                                 userlogintype == "pharmacy" && ("#"))
                                }
                               
                                >

                                <h3>Login</h3>

                                <Form.Group className="form-group">
                                    <Form.Select value={userlogintype} name="usertype" onChange={(e) => handleredirect(e)}>

                                        <option value="">Select User Type</option>
                                        <option value="doctor">Doctor</option>
                                        <option value="lab">Lab</option>
                                        <option value="wholesaler">Wholesaler</option>
                                        <option value="user">User</option>
                                        <option value="pharmacy">Pharmacy</option>

                                    </Form.Select>
                                </Form.Group>

                                
                                <Form.Group className="form-group">
                                    <Form.Control type="text" placeholder="Username" />
                                </Form.Group>
                                

                                <Form.Group className="form-group">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <div className="forgot-password">
                                    <Link to={"#"} className>Forgot Password?</Link>
                                </div>

                               <div className="buttons">
                              
                                    <input type="submit" className="custom-btn primary-btn" value="Submit"/>

                               </div>

                                </Form>

                                <div className="dont-have-account">
                                    <p>
                                        Don’t have an account? <Link to={"/signup"}>Sign up</Link>
                                    </p>
                                </div>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </div>

        </>

    )


}

export default Login;