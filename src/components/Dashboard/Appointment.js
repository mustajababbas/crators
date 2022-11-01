import { Link } from "react-router-dom"
import appointmentwhite from "../../assets/images/appointment-white.png"
import { Button } from "../../components"


function Appointment(){

    return(

        <>
        
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
                                                        Ketocona cream
                                                        <br/> 
                                                        4 packets
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
                                                        Ketocona cream
                                                        <br/> 
                                                        4 packets
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
                                                        Ketocona cream
                                                        <br/> 
                                                        4 packets
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
                                        <Button url="#" title="View All"/>
                                    </div>

                                </div>

        </div>

        </>
    )

}

export default Appointment