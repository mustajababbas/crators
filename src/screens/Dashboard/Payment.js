import { Col, Container, Row, Table,Form,Pagination  } from "react-bootstrap"
import { Usernav, Userheader, Button } from "../../components"
import neutrel from "../../assets/images/neutrel.png"
import tick from "../../assets/images/tick.png"
import pay from "../../assets/images/pay.png"
import cancel from "../../assets/images/cancel.png"
import greenflag from "../../assets/images/green-flag.png"
import redflag from "../../assets/images/red-flag.png"
import { Link } from "react-router-dom"








function Payment(){

    return (

        <>

           

           <div className="dashboard">

                <Usernav/>

                <div className="content">

                    <Userheader name="Opeyemi Pharmacy"/>

                    <Container fluid className="main-dashboard">

                      
                      <div className="total-products">

                      <h4>Payments</h4>

                        <div className="d-flex">
                      <Link to={"/dashboard/withdraw"} className="custom-btn primary-btn me-4"><img src={pay}/>Withdraw</Link>
                      <Link to={"#"} className="custom-btn primary-btn"><img src={pay}/>Add Money</Link>
                      </div>

                      </div>

                      <h4 className="wallet-blnc">Wallet Balance: <span>N340,000:34</span></h4>

                      <div className="dashboard-filter">



                          <Form>

                            <Row className="justify-content-center">
                                <Form.Group className="mb-5 col-lg-4">
                                    <div className="input-icon">
                                        <Form.Control type="text" placeholder="Search"/>
                                        <i class="fa-solid fa-magnifying-glass icon"></i>
                                    </div>
                                </Form.Group>
                            </Row>

                            <Row className="justify-content-center">

                                <Form.Group className="mb-5 col-lg-4">
                                    <Form.Select>

                                        <option>Choose Date Range</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        

                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-5 col-lg-4">
                                    <Form.Select>

                                        <option>Show All</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        

                                    </Form.Select>
                                </Form.Group>

                            </Row>
                            
                            
                          </Form>

                      </div>


                        <Container>
                          
                            <h4 className="pay-history-head">Today</h4>

                            <div className="payment-history">

                                <div className="d-flex align-items-center">

                                    <span className="image">
                                        <img src={greenflag}/>
                                    </span>

                                    <span>
                                        <h5>Anita Ghazali</h5>
                                        <p>7:08pm</p>
                                    </span>
                                </div>

                                <h4 className="green-text">+70,000.00</h4>

                            </div>

                            <h4 className="pay-history-head">22-Oct-2020</h4>

                            <div className="payment-history">

                                <div className="d-flex align-items-center">

                                    <span className="image">
                                        <img src={redflag}/>
                                    </span>

                                    <span>
                                        <h5>Anita Ghazali</h5>
                                        <p>7:08pm</p>
                                    </span>
                                </div>

                                <h4 className="red-text">-48,000.00</h4>

                            </div>

                            <div className="payment-history">

                                <div className="d-flex align-items-center">

                                    <span className="image">
                                        <img src={greenflag}/>
                                    </span>

                                    <span>
                                        <h5>Anita Ghazali</h5>
                                        <p>7:08pm</p>
                                    </span>
                                </div>

                                <h4 className="green-text">+70,000.00</h4>

                            </div>

                            <div className="payment-history">

                                <div className="d-flex align-items-center">

                                    <span className="image">
                                        <img src={redflag}/>
                                    </span>

                                    <span>
                                        <h5>Anita Ghazali</h5>
                                        <p>7:08pm</p>
                                    </span>
                                </div>

                                <h4 className="red-text">-48,000.00</h4>

                            </div>

                            <div className="payment-history">

                                <div className="d-flex align-items-center">

                                    <span className="image">
                                        <img src={greenflag}/>
                                    </span>

                                    <span>
                                        <h5>Anita Ghazali</h5>
                                        <p>7:08pm</p>
                                    </span>
                                </div>

                                <h4 className="green-text">+70,000.00</h4>

                            </div>

                        </Container>


                    </Container>

                </div>
        
            </div>
        
        </>

    )

}

export default Payment