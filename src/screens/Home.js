import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Header, Footer,Sidenav,Doctors,Labs, Products,SaleProducts  } from "../components";
import productmaker from "../assets/images/product-maker.png";
import product from "../assets/images/product.png";



function Home() {

    return (

        <>
            <Header />
          
                    <Container className="py-5">

                        <Row>

                            <Col lg={3}>

                                <Sidenav/>

                            </Col>

                            <Col lg={9}>

                                <div className="dual-heading">
                                    <h5>Hi Hydraxx,</h5>
                                    <h5>What would you like today?</h5>
                                </div>

                                <div className="main-image">
                                    
                                </div>

                            </Col>

                        </Row>

                        <div className="products">

                            <div className="products-head">

                                <h3>Featured Products</h3>
                                <Link to={"#"}>Explore <i class="fa-solid fa-angle-right"></i></Link>

                            </div>


                            <div className="products-body">

                                <Row>
                                    <Col lg={4}>
                                    <div className="products-items">

                                            <div className="product-meta">
                                                <h4>Sivoketoconazole</h4>
                                                <h3>200 Bottles</h3>
                                                <h2>N11500</h2>
                                                <span>
                                                    <img src={productmaker}/>
                                                    <p>Tuyil Pharmacy</p>
                                                </span>
                                            </div>

                                            <img src={product}/>

                                    </div>
                                    </Col>

                                    <Col lg={4}>
                                    <div className="products-items">

                                            <div className="product-meta">
                                                <h4>Sivoketoconazole</h4>
                                                <h3>200 Bottles</h3>
                                                <h2>N11500</h2>
                                                <span>
                                                    <img src={productmaker}/>
                                                    <p>Tuyil Pharmacy</p>
                                                </span>
                                            </div>

                                            <img src={product}/>

                                    </div>
                                    </Col>

                                    <Col lg={4}>
                                    <div className="products-items">

                                            <div className="product-meta">
                                                <h4>Sivoketoconazole</h4>
                                                <h3>200 Bottles</h3>
                                                <h2>N11500</h2>
                                                <span>
                                                    <img src={productmaker}/>
                                                    <p>Tuyil Pharmacy</p>
                                                </span>
                                            </div>

                                            <img src={product}/>

                                    </div>
                                    </Col>

                                </Row>
                            </div>


                        </div>

                        <div className="image">

                        </div>

                        <SaleProducts title="Discounted Products" name="Paracetamol" price="N200" saleprice="N500" manufacture="Paracetamol"/>

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


                        <Products title="Medical Instruments" name="Paracetamol" price="N200" manufacture="Paracetamol"/>

                        
                        <Doctors name="Dr Jane Doe" title="Top Doctors"/>

                        <div className="image">

                        </div>

                        <Labs title="Top Laboratories"/>
                        

                    </Container>
          
            <Footer />

        </>

    )


}

export default Home;
