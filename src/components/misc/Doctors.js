import {  Row, Col } from "react-bootstrap";
import doctor from "../../assets/images/doctors.png";
import { Link } from "react-router-dom";


function Doctors(props){

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

                                            <div className="doctors">

                                                <Link to={"#"}><img src={doctor}/></Link>

                                            </div>
                                            <div className="discount-meta">

                                                <Link to={"#"}>{props.name}</Link>
                                                <h3><Link to={"#"}>Dentist</Link></h3>

                                                <div className="rating">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star-half-stroke"></i>
                                                </div>
                                            
                                            </div>

                                    </div>

                                    </Col>

                                    <Col lg={3}>

                                    <div className="discount-products">

                                            <div className="doctors">

                                                <Link to={"#"}><img src={doctor}/></Link>

                                            </div>
                                            <div className="discount-meta">

                                                <Link to={"#"}>{props.name}</Link>
                                                <h3><Link to={"#"}>Dentist</Link></h3>

                                                <div className="rating">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star-half-stroke"></i>
                                                </div>
                                            
                                            </div>

                                    </div>

                                    </Col>

                                    <Col lg={3}>

                                        <div className="discount-products">

                                                <div className="doctors">

                                                    <Link to={"#"}><img src={doctor}/></Link>

                                                </div>
                                                <div className="discount-meta">

                                                    <Link to={"#"}>{props.name}</Link>
                                                    <h3><Link to={"#"}>Dentist</Link></h3>

                                                    <div className="rating">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star-half-stroke"></i>
                                                    </div>
                                                
                                                </div>

                                        </div>

                                        </Col>

                                        <Col lg={3}>

                                        <div className="discount-products">

                                                <div className="doctors">

                                                    <Link to={"#"}><img src={doctor}/></Link>

                                                </div>
                                                <div className="discount-meta">

                                                    <Link to={"#"}>{props.name}</Link>
                                                    <h3><Link to={"#"}>Dentist</Link></h3>

                                                    <div className="rating">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star-half-stroke"></i>
                                                    </div>
                                                
                                                </div>

                                        </div>

                                        </Col>

                                </Row>
                            </div>


        </div>

        </>

    )

}

export default Doctors;