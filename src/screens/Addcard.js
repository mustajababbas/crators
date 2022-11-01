import { Container,Form,Row } from "react-bootstrap";
import { Header, Footer,Button  } from "../components";
import { Link } from "react-router-dom";
import mastercard from "../assets/images/master-card.png"
import deletecart from "../assets/images/delete.png";


function Addcard(){



    return(

        <>

        <Header/>

            <Container className="py-5">

                    <div className="image mt-5">

                    </div>

                    <div className="white-box white-flex my-5">

                        <h2>51** **** **** **** **23</h2>
                        <img src={mastercard}/>
                        <span className="delete-cart">
                            <img src={deletecart} />
                        </span>

                    </div>

                    <Form className="add-card">

                        <Row>

                            <Form.Group className="mb-5" >
                                <Form.Label>Card Number</Form.Label>
                                <Form.Control type="tel" pattern="[0-9]+" maxlength="19" placeholder="Enter Card Number"/>
                            </Form.Group>

                            <Form.Group className="mb-5 col-lg-3">
                                <Form.Label>Exp</Form.Label>
                                <Form.Select>

                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                    <option>05</option>
                                    <option>06</option>
                                    <option>07</option>
                                    <option>08</option>
                                    <option>09</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>

                                </Form.Select>

                            </Form.Group>
                            <Form.Group className="mb-5 col-lg-3">
                                <Form.Label className="opacity-0">.</Form.Label>
                                <Form.Select>

                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                    <option>2026</option>
                                    <option>2027</option>
                                    <option>2028</option>
                                    <option>2029</option>
                                    <option>2030</option>
                                    <option>2031</option>
                                    <option>2032</option>
                                    <option>2033</option>

                                </Form.Select>

                            </Form.Group>

                            <Form.Group className="mb-5 col-lg-6">
                                <Form.Label>Cvv</Form.Label>
                                <Form.Control type="tel" pattern="[0-9]+" maxlength="3" placeholder="Enter Cvv"/>
                            </Form.Group>

                            <Form.Group className="mb-5">
                                <Form.Label>OTP Code</Form.Label>
                                <p className="mb-3">Please enter OTP code sent to +23481*******3</p>
                                <div className="position-relative">
                                    <Form.Control type="tel" pattern="[0-9]+" maxlength="6" placeholder="Enter 6 Words OTP"/>
                                    <button type="submit" className="request-otp">Send OTP</button>
                                </div>
                            </Form.Group>

                        </Row>


                        <input type="submit" variant="primary" value="Add new card" className="custom-btn primary-btn w-100"/>

                    </Form>

                    <div className="image mt-5">

                    </div>

            </Container>

        <Footer/>

        </>

    )

}

export default Addcard;