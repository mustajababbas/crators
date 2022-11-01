import { Col, Row } from "react-bootstrap"
import wallet from "../../assets/images/wallet.png"
import patients from "../../assets/images/patients.png"
import appointment from "../../assets/images/appointment.png"

function Overview(){

    return(

        <>
        
        <Row className="justify-content-between">

                            <Col lg={3}>

                                <div className="overview-box">
                                    <span className="yellow overview-icon">
                                        <img src={wallet}/>
                                    </span>

                                    <span className="overview-meta">
                                        <h3>N350,000:89</h3>
                                        <h5>Wallet Balance</h5>
                                    </span>

                                </div>

                            </Col>

                            <Col lg={3}>

                                <div className="overview-box">
                                    <span className="green overview-icon">
                                        <img src={patients}/>
                                    </span>

                                    <span className="overview-meta">
                                        <h3>12</h3>
                                        <h5>Total Patients</h5>
                                    </span>

                                </div>

                            </Col>


                            <Col lg={3}>

                                <div className="overview-box">
                                    <span className="blue overview-icon">
                                        <img src={appointment}/>
                                    </span>

                                    <span className="overview-meta">
                                        <h3>12</h3>
                                        <h5>New Appointments</h5>
                                    </span>

                                </div>

                            </Col>

                        </Row>

        </>

    )

}

export default Overview