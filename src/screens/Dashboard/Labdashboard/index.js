import { Container } from "react-bootstrap"
import { Docnav, Userheader, Overview, Appointment } from "../../../components"
import patient from "../../../assets/images/patients.png"
import star from "../../../assets/images/star.png"
import wallet from "../../../assets/images/wallet.png"
import statswhite from "../../../assets/images/stats-white.png"






function LabDashboard(){

    return (

        <>

           

           <div className="dashboard">

                <Docnav/>

                <div className="content">

                    <Userheader name="Opeyemi Pharmacy"/>
                    <Container fluid className="main-dashboard">

                        <Overview/>

                        <div className="my-5">

                            

                            <Appointment/>

                         


                            <div className="normal-box">

                                <div class="products-head">

                                    <div className="d-flex">
                                        <img src={statswhite} className="me-2"/>
                                        <h3>Store Stats</h3>

                                    </div>

                                </div>

                                <div className="normal-body">
                                    

                                    <div className="noti-table">

                                        <span className="noti">
                                            <img src={patient}/>
                                            <h5>Patients attended to</h5>
                                        </span>

                                        <span className="date">
                                            <h5>118</h5>
                                        </span>

                                    </div>

                                    <div className="noti-table">

                                        <span className="noti">
                                            <img src={star}/>
                                            <h5>Rating</h5>
                                        </span>

                                        <span className="date">
                                            <div className="rating">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star-half-stroke"></i>
                                            </div>
                                            <h5>2005</h5>
                                        </span>

                                    </div>

                                    <div className="noti-table">

                                        <span className="noti">
                                            <img src={wallet}/>
                                            <h5>Wallet Balance</h5>
                                        </span>

                                        <span className="date">
                                            <h5>N450,610:97</h5>
                                        </span>

                                    </div>

                        

                                 


                                </div>

                            </div>


                        

                        </div>



                    </Container>

                </div>
        
            </div>
        
        </>

    )

}

export default LabDashboard