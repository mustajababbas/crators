import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Header, Footer, Docsidenav,Doctors } from "../components";
import productmaker from "../assets/images/product-maker.png";
import product from "../assets/images/product.png";



function Doctorpage() {

    return (

        <>
            <Header />
          
                    <Container className="py-5">

                        <Row>

                            <Col lg={3}>

                                <Docsidenav/>

                            </Col>

                            <Col lg={9}>

                                <div className="dual-heading">
                                    <h5>Hi Hydraxx,</h5>
                                    <h5>What would you like today?</h5>
                                </div>

                                <div className="main-image dark-bg">
                                    
                                </div>

                            </Col>

                        </Row>

                        <Doctors name="Dr Jane Doe" title="Top Doctors"/>

                        <Doctors name="Dr Jane Doe" title="Top Optalmologists"/>

                        <Row>

                            <Col lg={6}>

                                <div className="image">

                                </div>

                            </Col>

                            <Col lg={6}>

                                <div className="image">

                                </div>

                            </Col>

                        </Row>

                        <Doctors name="Dr Jane Doe" title="Top Dentists"/>

                        <Doctors name="Dr Jane Doe" title="Top Dentists"/>

                        

                    </Container>
          
            <Footer />

        </>

    )


}

export default Doctorpage
