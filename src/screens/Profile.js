import {Header, Footer, Profileaside} from "../components";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useState } from "react";


function Profile(){

    const [password, setPassword]= useState(0)


    const [name, setName]= useState("Muhammad Ibtahim")
    const [nameType, setNameType]= useState(0)


    const [email, setEmail]= useState('fazal@gmail.com')
    const [emailType, setEmailType]= useState(0)


    const [phone, setPhone]= useState("0304040404")
    const [phoneType, setPhoneType]= useState(0)

    
    const [address, setAddress]= useState("No 13, sheikh belgore street, BasinIlorin, Kwara State, Nigeria")
    const [addressType, setAddressType]= useState(0)





    return(

        <>
            <Header />

            <Container className="py-5">
                

                <Row>

                <Col lg={3}>

                    <Profileaside/>

                </Col>

                    <Col lg={9}>

                        <div className="white-box mb-4">
                            <h3>Account Overview</h3>
                        </div>

                        <div className="white-box white-box-flex">
                            
                                <div className="account-info">

                                    <div className="account-header">
            
                                        <h4 className="m-0">Name</h4>

                                    </div>

                                    <div className="account-body">
                                    <div className="mb-5">

                                        <div className="edit">

                                            <input type="text" readOnly={nameType == 0 ? true : false} value={name} 
                                            className={nameType == 0 ? "readonly" : ""} onChange={(e) => setName(e.target.value)}/>
                                            <i class="fa-solid fa-pen" onClick={nameType == 0 ? (e) => setNameType(1) : (e) => setNameType(0)}></i>

                                        </div>

                                        <div className="edit">

                                        <input type="email" readOnly={emailType == 0 ? true : false} value={email} 
                                        className={emailType == 0 ? "readonly" : ""} onChange={(e) => setEmail(e.target.value)}/>

                                        <i class="fa-solid fa-pen" onClick={emailType == 0 ? (e) => setEmailType(1) : (e) => setEmailType(0)}></i>

                                        </div>

                                        <div className="edit">

                                            <input type="tel" readOnly={phoneType == 0 ? true : false} value={phone} 
                                            className={phoneType == 0 ? "readonly" : ""} onChange={(e) => setPhone(e.target.value)}/>

                                            <i class="fa-solid fa-pen" onClick={phoneType == 0 ? (e) => setPhoneType(1) : (e) => setPhoneType(0)}></i>

                                        </div>
                                       

                                    </div>

                                    <Link to={"#"} className="changepassword" onClick={password == 0 ? (e) => setPassword(1) : (e) => setPassword(0)}>Change Password</Link>

                                    <Form className={password == 0 ? "d-none" : "d-block"}>

                                        <Form.Group className="mb-5" >
                                            <Form.Label>Enter Old Password</Form.Label>
                                            <Form.Control type="password" />
                                        </Form.Group>

                                        <Form.Group className="mb-5" >
                                            <Form.Label>Enter New Password</Form.Label>
                                            <Form.Control type="password" />
                                        </Form.Group>

                                        <Form.Group className="mb-5" >
                                            <Form.Label>Confirm New Password</Form.Label>
                                            <Form.Control type="password" />
                                        </Form.Group>

                                
                                        <input type="submit" variant="primary" value="Save" className="custom-btn primary-btn w-100"/>

                                    </Form>


                                    </div>

                                </div>

                                <div className="account-info">

                                    <div className="account-header">

                                        <h4 className="m-0">Address</h4>
                                        <i class="fa-solid fa-pen" onClick={addressType == 0 ? (e) => setAddressType(1) : (e) => setAddressType(0)}></i>

                                    </div>

                                    <div className="account-body">
                                        
                                    <div className="edit">

                                        {/* <input type="text" readOnly={addressType == 0 ? true : false} value={address} 
                                        className={addressType == 0 ? "readonly" : ""} onChange={(e) => setAddress(e.target.value)}/> */}

                                        <textarea readOnly={addressType == 0 ? true : false} value={address} 
                                        className={addressType == 0 ? "readonly" : ""} cols="20" onChange={(e) => setAddress(e.target.value)}/>
                                        

                                    </div>
                                    

                                    </div>

                                </div>

                        </div>

                    </Col>

                </Row>

                <div className="image mt-5">

                </div>

            </Container>

            <Footer />

        </>

    )

}

export default Profile;