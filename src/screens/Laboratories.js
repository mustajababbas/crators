import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { Header, Footer, Docsidenav,Doctors,Labs} from "../components";
// import productmaker from "../assets/images/product-maker.png";
// import product from "../assets/images/product.png";



function Laboratories() {

    return (

        <>
            <Header />
          
                    <Container className="py-5">

                        <Labs title="Top Laboratories"/>

                        <div className="image mb-5">

                        </div>

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


                        <Labs title="Option 1"/>



                        <Labs title="Option 1"/>
                    

                        

                    </Container>
          
            <Footer />

        </>

    )


}

export default Laboratories
