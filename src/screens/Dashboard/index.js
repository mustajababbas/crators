import { Col, Container, Row } from "react-bootstrap"
import { Usernav, Userheader, Button } from "../../components"
import wallet from "../../assets/images/wallet.png"
import sale from "../../assets/images/sale.png"
import orders from "../../assets/images/orders.png"
import orderswhite from "../../assets/images/order-white.png"
import products from "../../assets/images/products.png"
import bellwhite from "../../assets/images/bell-white.png"
import statswhite from "../../assets/images/stats-white.png"
import customers from "../../assets/images/customers.png"
import reviews from "../../assets/images/reviews-white.png"
import tablet1 from "../../assets/images/tablet.png"




import { Link } from "react-router-dom"




function Dashboard(){

    return (

        <>

           

           <div className="dashboard">

                <Usernav/>

                <div className="content">

                    <Userheader name="Opeyemi Pharmacy"/>
                    <Container fluid className="main-dashboard">

                        <Row>

                            <Col lg={3}>

                                <div className="overview-box">
                                    <span className="yellow overview-icon">
                                        <img src={wallet}/>
                                    </span>

                                    <span className="overview-meta">
                                        <h3>N350,000:89</h3>
                                        <h5>Wallet Balance</h5>
                                    </span>

                                </div>

                            </Col>

                            <Col lg={3}>

                                <div className="overview-box">
                                    <span className="green overview-icon">
                                        <img src={sale}/>
                                    </span>

                                    <span className="overview-meta">
                                        <h3>12</h3>
                                        <h5>Sales</h5>
                                    </span>

                                </div>

                            </Col>

                            <Col lg={3}>

                                <div className="overview-box">
                                    <span className="pink overview-icon">
                                        <img src={orders}/>
                                    </span>

                                    <span className="overview-meta">
                                        <h3>12</h3>
                                        <h5>New Orders</h5>
                                    </span>

                                </div>

                            </Col>

                            <Col lg={3}>

                                <div className="overview-box">
                                    <span className="blue overview-icon">
                                        <img src={products}/>
                                    </span>

                                    <span className="overview-meta">
                                        <h3>100+</h3>
                                        <h5>Products</h5>
                                    </span>

                                </div>

                            </Col>

                        </Row>

                        <Row className="my-5">

                            <Col lg={8}>

                            <div className="normal-box">

                                <div class="products-head">

                                    <div className="d-flex">
                                        <img src={orderswhite} className="me-2"/>
                                        <h3>New Orders</h3>

                                    </div>
                                
                                </div>

                                <div className="normal-body">
                                    <div className="table-responsive">
                                        <table>

                                            <thead>
                                                <tr>
                                                    <th>
                                                        Items
                                                    </th>
                                                    
                                                    <th>
                                                        Time
                                                    </th>
                                                    
                                                    <th>
                                                        Delivery Address
                                                    </th>
                                                    
                                                    <th>
                                                        Action
                                                    </th>
                                                </tr>
                                                <tr></tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Ketocona cream
                                                        <br/> 
                                                        4 packets
                                                    </td>

                                                    <td>
                                                        Today
                                                        <br/>
                                                        10:08PM
                                                    </td>

                                                    <td>
                                                        No 16, Belgore str Ilorin,Kwara St
                                                    </td>

                                                    <td>
                                                        <Link to={"#"} className="custom-btn-sm primary-btn">View</Link>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>

                                                        Ketocona cream
                                                        <br/> 
                                                        4 packets

                                                        <br/>
                                                        <br/>

                                                        Ketocona cream
                                                        <br/> 
                                                        4 packets
                                                        
                                                    </td>

                                                    <td>
                                                        Today
                                                        <br/>
                                                        10:08PM
                                                    </td>

                                                    <td>
                                                        No 16, Belgore str Ilorin,Kwara St
                                                    </td>

                                                    <td>
                                                        <Link to={"#"} className="custom-btn-sm primary-btn">View</Link>
                                                    </td>
                                                </tr>

                                            </tbody>

                                        </table>
                                    </div>

                                    <div className="text-center my-5">
                                        <Button url="#" title="View All"/>
                                    </div>

                                </div>

                            </div>

                            <div className="normal-box">

                                <div class="products-head">

                                    <div className="d-flex">
                                        <img src={bellwhite} className="me-2"/>
                                        <h3>Notifications</h3>

                                    </div>

                                </div>

                                <div className="normal-body">
                                    

                                    <div className="noti-table">

                                        <span className="noti">
                                            <img src={products}/>
                                            <h5>Successfully Added a new product</h5>
                                        </span>

                                        <span className="date">
                                            <h5>20/08/2020  8:04pm</h5>
                                        </span>

                                    </div>


                                </div>

                            </div>

                            <div className="normal-box">

                                <div class="products-head">

                                    <div className="d-flex">
                                        <img src={statswhite} className="me-2"/>
                                        <h3>Store Stats</h3>

                                    </div>

                                </div>

                                <div className="normal-body">
                                    

                                    <div className="noti-table">

                                        <span className="noti">
                                            <img src={products}/>
                                            <h5>No. of Products</h5>
                                        </span>

                                        <span className="date">
                                            <h5>118</h5>
                                        </span>

                                    </div>

                                    <div className="noti-table">

                                        <span className="noti">
                                            <img src={orders}/>
                                            <h5>No. of Orders</h5>
                                        </span>

                                        <span className="date">
                                            <h5>2005</h5>
                                        </span>

                                    </div>

                                    <div className="noti-table">

                                        <span className="noti">
                                            <img src={sale}/>
                                            <h5>Total Sales</h5>
                                        </span>

                                        <span className="date">
                                            <h5>N450,610:97</h5>
                                        </span>

                                    </div>

                                    <div className="noti-table">

                                        <span className="noti">
                                            <img src={customers}/>
                                            <h5>Customers</h5>
                                        </span>

                                        <span className="date">
                                            <h5>1800</h5>
                                        </span>

                                    </div>

                                 


                                </div>

                            </div>

                            <div className="normal-box">

                                <div class="products-head">

                                    <div className="d-flex">
                                        <img src={reviews} className="me-2"/>
                                        <h3>Customer Reviews</h3>

                                    </div>

                                </div>

                                <div className="normal-body">
                                    
                                <div className="table-responsive">

                                        <table className="cutomer-reviews">

                                            <thead>
                                                <tr>
                                                    <th>
                                                    Image & Item Name
                                                    </th>
                                                    
                                                    <th>
                                                    Comment
                                                    </th>
                                                    
                                                    <th>
                                                    Star & Date
                                                    </th>
                                                    
                                                    
                                                </tr>
                                                <tr></tr>
                                            </thead>

                                            <tbody>


                                                <tr>
                                                    <td>
                                                       <img src={tablet1}/>
                                                        Paracetamol
                                                    </td>

                                                    <td>
                                                        It was expire.
                                                    </td>

                                                    <td>

                                                    <div className="rating">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star-half-stroke"></i>
                                                    </div>

                                                    <p className="date-sm">20/10/2020</p>

                                                    </td>

                                                </tr>

                                                <tr>
                                                    <td>
                                                       <img src={tablet1}/>
                                                        Paracetamol
                                                    </td>

                                                    <td>
                                                        It was expire.
                                                    </td>

                                                    <td>

                                                    <div className="rating">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star-half-stroke"></i>
                                                    </div>

                                                    <p className="date-sm">20/10/2020</p>

                                                    </td>

                                                </tr>

                                                

                                            </tbody>

                                        </table>
                                    </div>

                                    <div className="text-center my-5">
                                        <Button url="#" title="View All"/>
                                    </div>

                                 


                                </div>

                            </div>


                            </Col>

                            <Col lg={4}>
                                
                                <div className="recent-activities">

                                    <h3>Recent Activities</h3>

                                    <div className="activities-meta">

                                        <span>
                                            <img src={products}/>
                                        </span>

                                        <div>

                                        <h4>Added a new product</h4>
                                        <p>Today, 2:40pm</p>

                                        </div>

                                    </div>

                                    <div className="activities-meta">

                                        <span>
                                            <img src={products}/>
                                        </span>

                                        <div>

                                        <h4>Added a new product</h4>
                                        <p>Today, 2:40pm</p>

                                        </div>

                                    </div>

                                    <div className="activities-meta">

                                        <span>
                                            <img src={products}/>
                                        </span>

                                        <div>

                                        <h4>Added a new product</h4>
                                        <p>Today, 2:40pm</p>

                                        </div>

                                    </div>

                                    <div className="activities-meta">

                                        <span>
                                            <img src={products}/>
                                        </span>

                                        <div>

                                        <h4>Added a new product</h4>
                                        <p>Today, 2:40pm</p>

                                        </div>

                                    </div>

                                    <div className="activities-meta">

                                        <span>
                                            <img src={products}/>
                                        </span>

                                        <div>

                                        <h4>Added a new product</h4>
                                        <p>Today, 2:40pm</p>

                                        </div>

                                    </div>

                                </div>

                            </Col>

                        </Row>



                    </Container>

                </div>
        
            </div>
        
        </>

    )

}

export default Dashboard