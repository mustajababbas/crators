import { Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import productmaker from "../../assets/images/product-maker.png";
import paracetamol from "../../assets/images/paracetamol.png";

function Products(props){

    return(

        <>

            <div className="products">

            <div className="products-head">

                <h3>{props.title}</h3>
                <Link to={"#"}>Explore <i class="fa-solid fa-angle-right"></i></Link>

            </div>


            <div className="products-body">

                <Row className="gy-5">

                    <Col lg={3}>

                    <div className="discount-products">

                            <img src={paracetamol}/>

                            <div className="discount-meta">

                                <Link to={"#"}>{props.name}</Link>
                                <h3>{props.price}</h3>
                                <span>
                                    <img src={productmaker}/>
                                    <p>{props.manufacture}</p>
                                </span>

                            </div>

                    </div>

                    </Col> 

                    <Col lg={3}>

                    <div className="discount-products">

                            <img src={paracetamol}/>

                            <div className="discount-meta">

                                <Link to={"#"}>{props.name}</Link>
                                <h3>{props.price}</h3>
                                <span>
                                    <img src={productmaker}/>
                                    <p>{props.manufacture}</p>
                                </span>

                            </div>

                    </div>

                    </Col>   

                    <Col lg={3}>

                    <div className="discount-products">

                            <img src={paracetamol}/>

                            <div className="discount-meta">

                                <Link to={"#"}>{props.name}</Link>
                                <h3>{props.price}</h3>
                                <span>
                                    <img src={productmaker}/>
                                    <p>{props.manufacture}</p>
                                </span>

                            </div>

                    </div>

                    </Col>   

                    <Col lg={3}>

                    <div className="discount-products">

                            <img src={paracetamol}/>

                            <div className="discount-meta">

                                <Link to={"#"}>{props.name}</Link>
                                <h3>{props.price}</h3>
                                <span>
                                    <img src={productmaker}/>
                                    <p>{props.manufacture}</p>
                                </span>

                            </div>

                    </div>

                    </Col>   

                    <Col lg={3}>

                    <div className="discount-products">

                            <img src={paracetamol}/>

                            <div className="discount-meta">

                                <Link to={"#"}>{props.name}</Link>
                                <h3>{props.price}</h3>
                                <span>
                                    <img src={productmaker}/>
                                    <p>{props.manufacture}</p>
                                </span>

                            </div>

                    </div>

                    </Col>   


                    <Col lg={3}>

                    <div className="discount-products">

                            <img src={paracetamol}/>

                            <div className="discount-meta">

                                <Link to={"#"}>{props.name}</Link>
                                <h3>{props.price}</h3>
                                <span>
                                    <img src={productmaker}/>
                                    <p>{props.manufacture}</p>
                                </span>

                            </div>

                    </div>

                    </Col>   

                    <Col lg={3}>

                    <div className="discount-products">

                            <img src={paracetamol}/>

                            <div className="discount-meta">

                                <Link to={"#"}>{props.name}</Link>
                                <h3>{props.price}</h3>
                                <span>
                                    <img src={productmaker}/>
                                    <p>{props.manufacture}</p>
                                </span>

                            </div>

                    </div>

                    </Col>   

                    <Col lg={3}>

                    <div className="discount-products">

                            <img src={paracetamol}/>

                            <div className="discount-meta">

                                <Link to={"#"}>{props.name}</Link>
                                <h3>{props.price}</h3>
                                <span>
                                    <img src={productmaker}/>
                                    <p>{props.manufacture}</p>
                                </span>

                            </div>

                    </div>

                    </Col>                              

                </Row>
            </div>


            </div>

        
        </>

    )



}

export default Products;