import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Docnav, Userheader, Button,Appointment,Overview } from "../../../components"
import reviews from "../../../assets/images/reviews-white.png"
import tablet1 from "../../../assets/images/tablet.png"
import appointmentwhite from "../../../assets/images/appointment-white.png"




function DocDashboard(){

    return (

        <>

           

           <div className="dashboard">

                <Docnav/>

                <div className="content">

                    <Userheader name="Dr. Yemi Osin"/>
                    <Container fluid className="main-dashboard">

                        <Overview/>

                        <div className="my-5">

                            

                        <div className="normal-box">

                            <div class="products-head">

                                <div className="d-flex">
                                    <img src={appointmentwhite} className="me-2"/>
                                    <h3>New Appointments</h3>

                                </div>

                            </div>

                            <div className="normal-body">
                                <div className="table-responsive">
                                    <table>

                                        <thead>
                                            <tr>
                                                <th>
                                                    Items
                                                </th>
                                                
                                                <th>
                                                    Time
                                                </th>
                                            
                                                <th>
                                                    Action
                                                </th>
                                            </tr>
                                            <tr></tr>
                                        </thead>

                                        <tbody>

                                            <tr>
                                                <td>
                                                Ibrahim Mohammed
                                                   
                                                </td>

                                                <td>
                                                    Today
                                                    <br/>
                                                    10:08PM
                                                </td>
                                            

                                                <td><Link to={"#"} className="custom-btn-sm primary-btn">View</Link></td>

                                            </tr>

                                            <tr>
                                                <td>
                                                Deema Yanni
                                                    
                                                </td>

                                                <td>
                                                    Today
                                                    <br/>
                                                    10:08PM
                                                </td>
                                            

                                                <td><Link to={"#"} className="custom-btn-sm primary-btn">View</Link></td>

                                            </tr>

                                            <tr>
                                                <td>
                                                Deema Yanni
                                                   
                                                </td>

                                                <td>
                                                    Today
                                                    <br/>
                                                    10:08PM
                                                </td>
                                            

                                                <td><Link to={"#"} className="custom-btn-sm primary-btn">View</Link></td>

                                            </tr>

                                        

                                        </tbody>

                                    </table>
                                </div>

                                <div className="text-center my-5 w-25 m-auto">
                                    <Link to={"/dashboard/appointment"} className="custom-btn primary-btn">View All</Link>
                                </div>

                            </div>

                            </div>

                         


                            <div className="normal-box">

                                <div class="products-head">

                                    <div className="d-flex">
                                        <img src={reviews} className="me-2"/>
                                        <h3>Customer Reviews</h3>

                                    </div>

                                </div>

                                <div className="normal-body">
                                    
                                <div className="table-responsive">

                                        <table className="cutomer-reviews">

                                            <thead>
                                                <tr>
                                                    <th>
                                                    Image & Item Name
                                                    </th>
                                                    
                                                    <th>
                                                    Comment
                                                    </th>
                                                    
                                                    <th>
                                                    Star & Date
                                                    </th>
                                                    
                                                    
                                                </tr>
                                                <tr></tr>
                                            </thead>

                                            <tbody>


                                                <tr>
                                                    <td>
                                                    Deema Yannit
                                                    </td>

                                                    <td>
                                                    Great Experience
                                                    </td>

                                                    <td>

                                                    <div className="rating">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star-half-stroke"></i>
                                                    </div>

                                                    <p className="date-sm">20/10/2020</p>

                                                    </td>

                                                </tr>

                                                <tr>
                                                    <td>
                                                    Ibrahim Mohammed
                                                    </td>

                                                    <td>
                                                    A very intelligent doctor
                                                    </td>

                                                    <td>

                                                    <div className="rating">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star-half-stroke"></i>
                                                    </div>

                                                    <p className="date-sm">20/10/2020</p>

                                                    </td>

                                                </tr>

                                                

                                            </tbody>

                                        </table>
                                    </div>

                                    <div className="text-center my-5 w-25 m-auto">
                                        <Button url="#" title="View All"/>
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

export default DocDashboard