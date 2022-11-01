import {Container, Row, Table,Form,Pagination  } from "react-bootstrap"
import { Usernav, Userheader } from "../../components"
import { Link } from "react-router-dom"
import productswhite from "../../assets/images/productswhite.png"
import edit from "../../assets/images/edit.png"
import tablet1 from "../../assets/images/paracetamol2.png"
import tablet2 from "../../assets/images/thermo.png"





function Products(){

    return (

        <>

           

           <div className="dashboard">

                <Usernav/>

                <div className="content">

                    <Userheader name="Opeyemi Pharmacy"/>   

                    <Container fluid className="main-dashboard">

                      
                      <div className="total-products">

                      <h4>Total Products <span>= 190</span></h4>

                      <Link to={"/dashboard/add-product"} className="custom-btn primary-btn"><img src={productswhite}/>Add New</Link>

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
                                        
                                        <th>Image</th>
                                        
                                        <th>Name</th>

                                        <th>Price</th>

                                        <th></th>
                                        
                                        
                                    </tr>
                                    <tr></tr>

                                </thead>

                                <tbody>


                                    <tr>
                                        <td>
                                            <img src={tablet1}/>
                                        
                                        </td>

                                        <td>Paracetamol</td>

                                        <td>N 300</td>

                                        <td><button className="edit-product"><img src={edit}/></button></td>

                                    </tr>

                                    <tr>
                                        <td><img src={tablet2}/></td>

                                        <td>Paracetamol</td>

                                        <td>N 300</td>

                                        <td><button className="edit-product"><img src={edit}/></button></td>

                                    </tr>

                                    <tr>
                                        <td><img src={tablet2}/></td>

                                        <td>Paracetamol</td>

                                        <td>N 300</td>

                                        <td><button className="edit-product"><img src={edit}/></button></td>

                                    </tr>

                                    <tr>
                                        <td><img src={tablet2}/></td>

                                        <td>Paracetamol</td>

                                        <td>N 300</td>

                                        <td><button className="edit-product"><img src={edit}/></button></td>

                                    </tr>

                                    <tr>
                                        <td><img src={tablet2}/></td>

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

export default Products