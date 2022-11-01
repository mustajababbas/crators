import { Container } from "react-bootstrap";
import { Footer, Header,SaleProducts } from "../components";
import paracetamol from "../assets/images/paracetamol.png";
import deletecart from "../assets/images/delete.png";
import { Link } from "react-router-dom";

function Favourites(){

    return(

        <>

            <Header/>

            <Container className="py-5">

                <h2>Your Order (3 Items)</h2>

                <div className="favourite">

                    <div className="d-flex align-items-center">

                    <div className="product">
                        <Link to={"#"}><img src={paracetamol}/></Link> 
                    </div>

                    <div className="favourite-meta">
                        <p>Seller: <span>Opeyemi Pharmacy</span></p>
                        <h3>Paracetamol Tablet</h3>
                        <p>N300</p>
                    </div>

                    </div>

                    <span className="delete-cart">
                        <img src={deletecart} />
                    </span>

                </div>

                <div className="favourite">

                    <div className="d-flex align-items-center">

                    <div className="product">
                        <Link to={"#"}><img src={paracetamol}/></Link> 
                    </div>

                    <div className="favourite-meta">
                        <p>Seller: <span>Opeyemi Pharmacy</span></p>
                        <h3>Paracetamol Tablet</h3>
                        <p>N300</p>
                    </div>

                    </div>

                    <span className="delete-cart">
                        <img src={deletecart} />
                    </span>

                </div>

                <div className="favourite">

                    <div className="d-flex align-items-center">

                    <div className="product">
                        <Link to={"#"}><img src={paracetamol}/></Link> 
                    </div>

                    <div className="favourite-meta">
                        <p>Seller: <span>Opeyemi Pharmacy</span></p>
                        <h3>Paracetamol Tablet</h3>
                        <p>N300</p>
                    </div>

                    </div>

                    <span className="delete-cart">
                        <img src={deletecart} />
                    </span>

                </div>

                <div className="favourite">

                    <div className="d-flex align-items-center">

                    <div className="product">
                        <Link to={"#"}><img src={paracetamol}/></Link> 
                    </div>

                    <div className="favourite-meta">
                        <p>Seller: <span>Opeyemi Pharmacy</span></p>
                        <h3>Paracetamol Tablet</h3>
                        <p>N300</p>
                    </div>

                    </div>

                    <span className="delete-cart">
                        <img src={deletecart} />
                    </span>

                </div>

                <div className="favourite">

                    <div className="d-flex align-items-center">

                    <div className="product">
                        <Link to={"#"}><img src={paracetamol}/></Link> 
                    </div>

                    <div className="favourite-meta">
                        <p>Seller: <span>Opeyemi Pharmacy</span></p>
                        <h3>Paracetamol Tablet</h3>
                        <p>N300</p>
                    </div>

                    </div>

                    <span className="delete-cart">
                        <img src={deletecart} />
                    </span>

                </div>

                <div className="favourite">

                    <div className="d-flex align-items-center">

                    <div className="product">
                        <Link to={"#"}><img src={paracetamol}/></Link> 
                    </div>

                    <div className="favourite-meta">
                        <p>Seller: <span>Opeyemi Pharmacy</span></p>
                        <h3>Paracetamol Tablet</h3>
                        <p>N300</p>
                    </div>

                    </div>

                    <span className="delete-cart">
                        <img src={deletecart} />
                    </span>

                </div>

                <div className="image">

                </div>

                <SaleProducts title="Discounted Products" name="Paracetamol" price="N200" saleprice="N500" manufacture="Paracetamol"/>

            </Container>

            <Footer/>


        </>

    )

}

export default Favourites;