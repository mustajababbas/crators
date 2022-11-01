import { Container, Row,Form,Pagination  } from "react-bootstrap"
import { Docnav, Userheader } from "../../../components"
import { Link } from "react-router-dom"
import productswhite from "../../../assets/images/productswhite.png"
import edit from "../../../assets/images/edit.png"






function Test(){

    return (

        <>

           

           <div className="dashboard">

                <Docnav/>

                <div className="content">

                    <Userheader name="Opeyemi Pharmacy"/>

                    <Container fluid className="main-dashboard">

                      
                      <div className="total-products">

                      <h4>Total Products <span>= 190</span></h4>

                      <Link to={"/dashboard/add-test"} className="custom-btn primary-btn"><img src={productswhite}/>Add New</Link>

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
                                        
                                        <th>Test Name</th>
                                        
                                        <th>Requirments</th>

                                        <th>Price</th>

                                        <th></th>
                                        
                                        
                                    </tr>
                                    <tr></tr>

                                </thead>

                                <tbody>


                                    <tr>
                                        <td>Malaria Test</td>

                                        <td>Paracetamol</td>

                                        <td>N 300</td>

                                        <td><button className="edit-product"><img src={edit}/></button></td>

                                    </tr>

                                    <tr>
                                        <td>Malaria Teat</td>

                                        <td>Paracetamol</td>

                                        <td>N 300</td>

                                        <td><button className="edit-product"><img src={edit}/></button></td>

                                    </tr>

                                    <tr>
                                        <td>Heart beat</td>

                                        <td>Paracetamol</td>

                                        <td>N 300</td>

                                        <td><button className="edit-product"><img src={edit}/></button></td>

                                    </tr>

                                    <tr>
                                        <td>Genotype</td>

                                        <td>Paracetamol</td>

                                        <td>N 300</td>

                                        <td><button className="edit-product"><img src={edit}/></button></td>

                                    </tr>

                                    <tr>
                                        <td>PVC</td>

                                        <td>Paracetamol</td>

                                        <td>N 300</td>

                                        <td><button className="edit-product"><img src={edit}/></button></td>

                                    </tr>

                                    

                                </tbody>

                                <tfoot>
                                    <tr>

                                        <td>Page 2 of 24</td>

                                        <td colSpan={4} className="custom-pagination">
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

export default Test