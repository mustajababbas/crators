import { Container,Form,Row } from "react-bootstrap";
import { Header, Footer  } from "../components";
import { Link } from "react-router-dom";
import filter from "../assets/images/filter.png"
import deletecart from "../assets/images/delete.png";

function Orderhistory(){

    return(

        <>

            <Header/>

                <Container className="py-5">

                     <div className="image">

                    </div>

                    <div className="d-flex justify-content-between align-items-center">

                        <h2 className="my-5">Order History</h2>

                        <img src={filter} className="filter"/>

                    </div>

                    <div className="order-history">

                        <div className="">
                                <h3>ID:23456</h3>
                                <p>22/12/2020, 9:40pm</p>
                                <p>Seller: Opeyemi Pharmacy</p>
                                <h5>Total: 230 Items</h5>

                        </div>
                        
                        <h5>Amount: N45000</h5>

                        <span className="delete-cart">
                                <img src={deletecart} />
                        </span>

                    </div>

                    <div className="order-history">

                        <div className="">
                                <h3>ID:23456</h3>
                                <p>22/12/2020, 9:40pm</p>
                                <p>Seller: Opeyemi Pharmacy</p>
                                <h5>Total: 230 Items</h5>

                        </div>

                        <h5>Amount: N45000</h5>

                        <span className="delete-cart">
                                <img src={deletecart} />
                        </span>

                    </div>

                    <div className="order-history">

                        <div className="">
                                <h3>ID:23456</h3>
                                <p>22/12/2020, 9:40pm</p>
                                <p>Seller: Opeyemi Pharmacy</p>
                                <h5>Total: 230 Items</h5>

                        </div>

                        <h5>Amount: N45000</h5>

                        <span className="delete-cart">
                                <img src={deletecart} />
                        </span>

                    </div>

                    <div className="order-history">

                        <div className="">
                                <h3>ID:23456</h3>
                                <p>22/12/2020, 9:40pm</p>
                                <p>Seller: Opeyemi Pharmacy</p>
                                <h5>Total: 230 Items</h5>

                        </div>

                        <h5>Amount: N45000</h5>

                        <span className="delete-cart">
                                <img src={deletecart} />
                        </span>

                    </div>

                    <div className="order-history">

                        <div className="">
                                <h3>ID:23456</h3>
                                <p>22/12/2020, 9:40pm</p>
                                <p>Seller: Opeyemi Pharmacy</p>
                                <h5>Total: 230 Items</h5>

                        </div>

                        <h5>Amount: N45000</h5>

                        <span className="delete-cart">
                                <img src={deletecart} />
                        </span>

                    </div>

                    <div className="order-history">

                        <div className="">
                                <h3>ID:23456</h3>
                                <p>22/12/2020, 9:40pm</p>
                                <p>Seller: Opeyemi Pharmacy</p>
                                <h5>Total: 230 Items</h5>

                        </div>

                        <h5>Amount: N45000</h5>

                        <span className="delete-cart">
                                <img src={deletecart} />
                        </span>

                    </div>

                </Container>


            <Footer/>


        </>
    )

}

export default Orderhistory;