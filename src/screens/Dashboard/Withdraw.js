import { Container, Row, Table,Form,Pagination  } from "react-bootstrap"
import { Usernav, Userheader, Button } from "../../components"
import { Link } from "react-router-dom"








function Withdraw(){

    return (

        <>

           

           <div className="dashboard">

                <Usernav/>

                <div className="content">

                    <Userheader name="Opeyemi Pharmacy"/>

                    <Container fluid className="main-dashboard">

                      
                      <div className="total-products">

                      <h4>Payments</h4>

                      </div>

                      <h4 className="wallet-blnc">Wallet Balance: <span>N340,000:34</span></h4>

                      

                        <Container>

                          <Form>

                                <Form.Group className="mb-5">
                                    <Form.Select>

                                        <option>Select Bank</option>
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

                                <Form.Group className="mb-5" >
                                    <Form.Control type="tel" pattern="[0-9]+" maxlength="19" placeholder="Card Number"/>
                                </Form.Group>

                                <Form.Group className="mb-5" >
                                    <Form.Control type="text" placeholder="Account Name"/>
                                </Form.Group>

                                
                                    <button type="submit" className="custom-btn primary-btn m-auto">Withdraw</button>
                              
                            
                          </Form>

                          </Container>


                    </Container>

                </div>
        
            </div>
        
        </>

    )

}

export default Withdraw