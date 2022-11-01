import { Container, Row, Col, Form, Button, Navbar, Offcanvas, Nav, NavDropdown, FormControl, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import menu from "../../assets/images/men.png"
import searchIcon from "../../assets/images/search-icon.png"
import filter from "../../assets/images/filter.png"
import user from "../../assets/images/user.png"
import cart from "../../assets/images/cart.png"
import bell from "../../assets/images/bell-bold.png"
import chat from "../../assets/images/messenger.png"

import './index.css';

export default function Header() {

    const onClick = (e) => {
        e.preventDefault()
      }

    return (

        <>
            <Navbar bg="white" expand={false} >
                <Container>
                        <Link to={"/"}>
                        <img src={logo} />
                        </Link>
                    


                    <div className="d-flex align-items-center header-center-box justify-content-between">
                        <InputGroup>
                            <InputGroup.Text id="search-icon-box">
                                <img src={searchIcon} />
                            </InputGroup.Text>
                            <FormControl
                                placeholder="Products, Pharmacists..."
                            />
                        </InputGroup>
                        <div>
                        <Link to onClick={onClick}>
                            <img src={filter} className="filter"/>
                        </Link>
                        </div>
                        <div>
                        <Link to onClick={onClick}>
                            <img src={user}/>
                        </Link>
                        </div>

                        <div>
                            <Link to={"/cart"}>
                            <img src={cart} width="50px"/>
                            </Link>
                        </div>
                        <div>
                        <Link to onClick={onClick}>
                            <img src={bell} width="50px"/>
                        </Link>
                        </div>
                        <div>
                        <Link to onClick={onClick}>
                            <img src={chat} width="46px"/>
                        </Link>
                        </div>

                    </div>
                    <Navbar.Toggle aria-controls="offcanvasNavbar"> <img src={menu} /> </Navbar.Toggle>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                        className="custom-nav"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                               <Link to={"/"}><img src={logo} /></Link> 
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">

                                <Nav.Link href="/profile">My Profile</Nav.Link>
                                <Nav.Link href="#">Wallet</Nav.Link>
                                <Nav.Link href="/card">Cards</Nav.Link>
                                <Nav.Link href="/favourites">Favourites</Nav.Link>
                                <Nav.Link href="/order-history">Order History</Nav.Link>
                                <Nav.Link href="#">Settings</Nav.Link>
                                <Nav.Link href="#">Logout</Nav.Link>


                            </Nav>
                          
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                </Container>
            </Navbar>

        </>

    )


}
