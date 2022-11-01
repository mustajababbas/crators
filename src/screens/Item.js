
import { Container, Row, Col } from "react-bootstrap";
import { Header, Footer,Button, Products} from "../components";
import syrup from "../assets/images/syrup.png";

function Item(){

    return (

        <>

        <Header/>

            <Container className="py-5">

                <div className="mb-5">

                    <Row>

                        <Col lg={6} className="single-img">
                        
                            <img src={syrup}/>

                        </Col>

                        <Col lg={6} className="product-description">

                            <div className="product-name">
                                <h2>Refort Syrup</h2>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="35" viewBox="0 0 38 35" fill="none">
                                        <path d="M10.3232 2.4593C5.58477 2.4593 1.74219 6.26242 1.74219 10.9545C1.74219 14.7422 3.24387 23.7317 18.0256 32.819C18.2903 32.9801 18.5943 33.0653 18.9043 33.0653C19.2142 33.0653 19.5182 32.9801 19.783 32.819C34.5646 23.7317 36.0663 14.7422 36.0663 10.9545C36.0663 6.26242 32.2237 2.4593 27.4853 2.4593C22.7468 2.4593 18.9043 7.60793 18.9043 7.60793C18.9043 7.60793 15.0617 2.4593 10.3232 2.4593Z" stroke="black" stroke-width="3.43241" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>

                            <div className="product-ml">
                                <h3>500ml</h3>
                                <p>Seller: <span>Opeyemi Pharmacy</span></p>
                            </div>

                            <hr/>

                            <div className="product-price">

                                <p>N3500.00</p>
                                <h5>Subtotal: <span>N5000.00</span></h5>

                            </div>

                            <div className="buttons pb-5">
                            <Button url="#" title="Add To Cart"/>
                            </div>
                            
                        </Col>

                    </Row>

                </div>

                <div className="white-box mb-5">

                    <h3>Drug Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit 
                        quam tristique amet risus maecenas
                        urna, risus. Non, ac sed molestie facilisis arcu tortor auctor.
                        Duis urna volutpat aliquam nibh
                        odio massa. Nunc at euismod aliquam tellus. Lectus
                        nunc interdum consequat faucibu
                        s rhoncus malesuada. Cras fames massa ornare ac
                        fringilla odio. Odio viverra a, id fermentum
                    </p>

                </div>

                <div className="white-box">

                    <h3>Customer Reviews</h3>
                    <p>No reviews yet</p>

                </div>

                <Products title="Similar Items" name="Paracetamol" price="N200" manufacture="Paracetamol"/>

            </Container>

        <Footer/>

        </>

    )

}

export default Item;