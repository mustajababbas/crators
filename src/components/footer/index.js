import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './index.css';
import footerlogo from "../../assets/images/logo2.png"

export default function Footer() {

    return (

        <>
            <footer>
                <Container fluid>
                    <Row>

                        <Col lg={3} className="first-footer">
                            <h5 className="title">Newsletter</h5>
                            <p className="para">Get the latest news from Crators</p>

                            <form>
                                
                                <div className="subscribe">
                                    <input type="email" placeholder="Email"/>
                                    <input type="submit" value="subscribe"/>
                                </div>

                            </form>

                            <p className="para">Working Hours: Mon - Fri, 9AM-8PM</p>
                            <p className="para">Customer Care: 0909090909</p>
                        </Col>

                        <Col lg={3}>
                            <h5 className="title">About</h5>
                            <ul className="footer-menu">
                                <li >
                                    <a href="#!">Option 1</a>
                                </li>
                                <li>
                                    <a href="#!">Option 2</a>
                                </li>
                                <li >
                                    <a href="#!">Option 3</a>
                                </li>
                                <li>
                                    <a href="#!">Option 4</a>
                                </li>
                            </ul>
                        </Col>

                        <Col lg={3}>
                            <h5 className="title">Terms</h5>
                            <ul className="footer-menu">
                                <li >
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li >
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </Col>

                        <Col lg={3}>
                            <h5 className="title">Get Help</h5>
                            <ul className="footer-menu">
                                <li >
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li >
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </Col>

                    </Row>
                </Container>
                <div className="footer-copyright">
                        <Link to={"/"} ><img src={footerlogo}/></Link>
                        <p>Copyright © {new Date().getFullYear()}  Crators Health Limited</p>
                </div>
            </footer>

        </>

    )


}
