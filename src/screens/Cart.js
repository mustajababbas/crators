import { Container,Table } from "react-bootstrap";
import { Header, Footer,Button, Products, SaleProducts  } from "../components";
import paracetamol from "../assets/images/paracetamol.png";
import deletecart from "../assets/images/delete.png";
import { Link } from "react-router-dom";
import {useState } from "react";


function Cart(){

    const [qty,setQty] = useState(0);

    const increase = () => {
        
        if(qty < 20){
            setQty(qty + 1)
        }
    };

    const decrease = () => {
        if(qty > 0){
            setQty(qty - 1)
        }
    };

    return(

        <>

        <Header/>

            <Container className="py-5">

                <h2>Your Order (3 Items)</h2>


                <Table className="cart-items">

                    <tbody>

                        <td className="product">
                           <Link to={"#"}><img src={paracetamol}/></Link> 
                        </td>

                        <td className="cart-meta"> 
                        
                            <p>Seller: <span>Opeyemi Pharmacy</span></p>
                            <h3>Paracetamol Tablet</h3>
                            <p>N300</p>
                            
                        </td>

                        <td className="cart-total"> 
                            <p>Total</p>
                            <p>N1500</p>
                        </td>

                        <td className="cart-quantity">

                        <div class="increament">
                            <div class="value-button increase" id="increase" value="Increase Value" onClick={(e)=>increase()}>+</div>
                            <input type="number" id="room-number" value={qty} min="1" max="20" class="number" readOnly/>
                            <div class="value-button decrease" id="decrease" value="Decrease Value" onClick={(e)=>decrease()}>-</div>
                        </div>

                        </td>

                        <td className="delete-cart">
                            <img src={deletecart} />
                        </td>


                    </tbody>
                    

                </Table>

                <Table className="cart-items">
                    
                    <tbody>

                        <td className="product">
                           <Link to={"#"}><img src={paracetamol}/></Link> 
                        </td>

                        <td className="cart-meta"> 
                            <p>Seller: <span>Opeyemi Pharmacy</span></p>
                            <h3>Paracetamol Tablet</h3>
                            <p>N300</p>
                            
                        </td>

                        <td className="cart-total"> 
                            <p>Total</p>
                            <p>N1500</p>
                        </td>

                        <td className="cart-quantity">

                        <div class="increament">
                            <div class="value-button increase" id="increase" value="Increase Value" onClick={(e)=>increase()}>+</div>
                            <input type="number" id="room-number" value={qty} min="1" max="20" class="number" readOnly/>
                            <div class="value-button decrease" id="decrease" value="Decrease Value" onClick={(e)=>decrease()}>-</div>
                        </div>

                        </td>

                        <td className="delete-cart">
                            <img src={deletecart} />
                        </td>


                    </tbody>
                    

                </Table>

                <Table className="cart-items">
                    
                    <tbody>

                        <td className="product">
                           <Link to={"#"}><img src={paracetamol}/></Link> 
                        </td>

                        <td className="cart-meta"> 
                            <p>Seller: <span>Opeyemi Pharmacy</span></p>
                            <h3>Paracetamol Tablet</h3>
                            <p>N300</p>
                            
                        </td>

                        <td className="cart-total"> 
                            <p>Total</p>
                            <p>N1500</p>
                        </td>

                        <td className="cart-quantity">

                        <div class="increament">
                            <div class="value-button increase" id="increase" value="Increase Value" onClick={(e)=>increase()}>+</div>
                            <input type="number" id="room-number" value={qty} min="1" max="20" class="number" readOnly/>
                            <div class="value-button decrease" id="decrease" value="Decrease Value" onClick={(e)=>decrease()}>-</div>
                        </div>

                        </td>

                        <td className="delete-cart">
                            <img src={deletecart} />
                        </td>


                    </tbody>
                    

                </Table>

                <div className="cart-summary">

                    <Table>
                        
                        <tbody>
                            <tr>
                                <td>Total</td>
                                <td className="text-end">N40000</td>
                            </tr>

                            <tr>
                                <td>Discount</td>
                                <td className="text-end">N6000</td>
                            </tr>

                            <tr>
                                <td>Coupon Code</td>
                                <td className="text-end">
                                    <form>
                                        <input type="text"/>
                                    </form>
                                </td>
                            </tr>

                            <tr>
                                <td>Amount to be paid</td>
                                <td className="text-end total">N32000</td>
                            </tr>
                        </tbody>

                    </Table>

                </div>

                    <div className="buttons pb-5">
                    <Button url="#" title="Proceed To Checkout"/>
                    </div>

            <Products title="Favourite Items" name="Paracetamol" price="N200" manufacture="Paracetamol"/>

            <SaleProducts title="Discounted Products" name="Paracetamol" price="N200" saleprice="N500" manufacture="Paracetamol"/>

            <Products title="Medical Instruments" name="Paracetamol" price="N200" manufacture="Paracetamol"/>

            </Container>

        <Footer/>

        </>

    )

}

export default Cart;