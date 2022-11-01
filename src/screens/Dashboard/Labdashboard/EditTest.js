import { Container, Row,Form,Col  } from "react-bootstrap"
import { Usernav, Userheader, Button } from "../../../components"


function Edittest(){

    return (

        <>

           

           <div className="dashboard">

                <Usernav/>

                <div className="content">

                    <Userheader name="Opeyemi Pharmacy"/>

                    <Container fluid className="main-dashboard">

                      
                      <div className="total-products">

                      <h4>Add Test</h4>

                      </div>
                    
                        <Container fluid>

                          <Form>

                            <Row>

                                <Form.Group className="mb-5 col-12" >
                                    <Form.Label>Test Name</Form.Label>
                                    <Form.Control type="text" placeholder="Tramadol"/>
                                </Form.Group>

                                <Form.Group className="mb-5 col-6" >
                                    <Form.Label>Requirements</Form.Label>
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


                                <Form.Group className="mb-5 col-12" >
                                    <Form.Label>Description</Form.Label>
                                    <textarea class="form-control" rows="10"></textarea>
                                </Form.Group>

                                <Col lg={12}>

                                    <button type="submit" className="custom-btn primary-btn m-auto">Save</button>

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

export default Edittest