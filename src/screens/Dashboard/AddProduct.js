import { Container, Row,Form,Col  } from "react-bootstrap"
import { Usernav, Userheader, Button } from "../../components"
import image from "../../assets/images/image.png"








function Addproduct(){

    return (

        <>

           

           <div className="dashboard">

                <Usernav/>

                <div className="content">

                    <Userheader name="Opeyemi Pharmacy"/>

                    <Container fluid className="main-dashboard">

                      
                      <div className="total-products">

                      <h4>Add Product</h4>

                      </div>
                    
                        <Container fluid>

                          <Form>

                            <Row>

                                <Form.Group className="mb-5 col-12" >
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" placeholder="Tramadol"/>
                                </Form.Group>

                                <Form.Group className="mb-5 col-6" >
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select>

                                        <option>Drugs</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                      

                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-5 col-6" >
                                    <Form.Label>Price (N)</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group className="mb-5 col-6" >
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select>

                                        <option>Drugs</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                      

                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-5 col-12" >
                                    <Form.Label>Image</Form.Label>

                                    <div className="upload-flex">

                                        <div class="upload-btn">
                                        <Form.Label for="upload-profile" className="upload-label">
                                        <img src={image}/>
                                            <br/>
                                        Drop your images here or
                                            click here to browse
                                        </Form.Label> 
                                        <Form.Control type="file" id="upload-profile"/>
                                        </div>

                                        <div class="upload-btn">
                                        <Form.Label for="upload-profile" className="upload-label">
                                        <img src={image}/>
                                        </Form.Label> 
                                        <Form.Control type="file" id="upload-profile"/>
                                        </div>

                                        <div class="upload-btn">
                                        <Form.Label for="upload-profile" className="upload-label">
                                        <img src={image}/>
                                        </Form.Label> 
                                        <Form.Control type="file" id="upload-profile"/>
                                        </div>

                                        <div class="upload-btn">
                                        <Form.Label for="upload-profile" className="upload-label">
                                        <img src={image}/>
                                        </Form.Label> 
                                        <Form.Control type="file" id="upload-profile"/>
                                        </div>

                                    </div>


                                </Form.Group>

                                <Form.Group className="mb-5 col-12" >
                                    <Form.Label>Description</Form.Label>
                                    <textarea class="form-control" rows="10"></textarea>
                                </Form.Group>

                             

                                <Col lg={12}>

                                    <button type="submit" className="custom-btn primary-btn m-auto">Add New</button>

                                </Col>

                            </Row>
                            
                          </Form>

                          </Container>


                    </Container>

                </div>
        
            </div>
        
        </>

    )

}

export default Addproduct