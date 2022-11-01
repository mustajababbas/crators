import { Col, Container, Row, Table,Form,Pagination  } from "react-bootstrap"
import { Userheader, Button, Docnav } from "../../../components"
import neutrel from "../../../assets/images/neutrel.png"
import tick from "../../../assets/images/tick.png"
import cancel from "../../../assets/images/cancel.png"








function Appointment(){

    return (

        <>

           

           <div className="dashboard">

                <Docnav/>

                <div className="content">

                    <Userheader name="Dr. Yemi Osin"/>

                    <Container fluid className="main-dashboard">

                      
                      <div className="total-products">

                      <h4>New Appointment</h4>


                      </div>

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

                      <div className="normal-body">
                        <div className="table-responsive">

                            <table className="doctor-products">

                                <thead>

                                    <tr>
                                        
                                        <th>Customer</th>
                                        

                                        <th>Time</th>


                                        <th>Status</th>

                                        
                                        
                                    </tr>

                                    <tr></tr>

                                </thead>

                                <tbody>


                                    <tr>
                                        <td>Hydraxx</td>


                                        <td className="date-time">
                                            <span>20/20/2020</span>
                                            <span>10:08PM</span>
                                        </td>

                                        

                                        <td><img src={tick}/></td>

                                    </tr>

                                    <tr>
                                        <td>Hydraxx</td>


                                        <td className="date-time">
                                            <span>20/20/2020</span>
                                            <span>10:08PM</span>
                                        </td>

                                        

                                        <td><img src={tick}/></td>

                                    </tr>

                                    <tr>
                                        <td>Hydraxx</td>


                                        <td className="date-time">
                                            <span>20/20/2020</span>
                                            <span>10:08PM</span>
                                        </td>

                                        

                                        <td><img src={tick}/></td>

                                    </tr>

                                    <tr>
                                        <td>Hydraxx</td>


                                        <td className="date-time">
                                            <span>20/20/2020</span>
                                            <span>10:08PM</span>
                                        </td>

                                        

                                        <td><img src={tick}/></td>

                                    </tr>

                                

                                    

                                </tbody>

                                <tfoot>
                                    <tr>

                                        <td>Page 2 of 24</td>

                                        <td colSpan={2} className="custom-pagination">
                                            <Pagination>
                                                <Pagination.First className="icons" />
                                                <Pagination.Prev className="icons"/>
                                                <Pagination.Item>{1}</Pagination.Item>
                                                <Pagination.Ellipsis />

                                                <Pagination.Item>{10}</Pagination.Item>
                                                <Pagination.Item>{11}</Pagination.Item>
                                                <Pagination.Item active>{12}</Pagination.Item>
                                                <Pagination.Item>{13}</Pagination.Item>
                                                <Pagination.Item>{14}</Pagination.Item>

                                                <Pagination.Ellipsis />
                                                <Pagination.Item>{20}</Pagination.Item>
                                                <Pagination.Next className="icons"/>
                                                <Pagination.Last className="icons"/>

                                            </Pagination>
                                        </td>


                                    </tr>
                                </tfoot>

                                </table>
                            </div>
                      </div>


                    </Container>

                </div>
        
            </div>
        
        </>

    )

}

export default Appointment