import { Container } from "react-bootstrap";
import { Header, Footer,Button  } from "../components";
import { Link } from "react-router-dom";
import mastercard from "../assets/images/master-card.png"
import deletecart from "../assets/images/delete.png";


function Cards(){



    return(

        <>

        <Header/>

            <Container className="py-5">

                <h2>Cards</h2>

                    <div className="white-box white-flex my-5">

                        <h2>51** **** **** **** **23</h2>
                        <img src={mastercard}/>
                        <span className="delete-cart">
                            <img src={deletecart} />
                        </span>

                    </div>

                    <div className="buttons pb-5">
                        <Button url="/add-new-card" title="Add new card"/>
                    </div>

                    <div className="image mt-5">

                    </div>

            </Container>

        <Footer/>

        </>

    )

}

export default Cards;