import { Nav } from "react-bootstrap";
import eye from "../../assets/images/eye.png"
import teeth from "../../assets/images/teeth.png"


function Docsidenav(){

    return (
        
        <>

        <Nav defaultActiveKey="/home" className="flex-column side-nav">
            <h4>Specialists</h4>

            <Nav.Link href="#"><img src={eye} class="side-icons"/> Eye Doc</Nav.Link>
            <Nav.Link href="#"><img src={eye} class="side-icons"/> Eye Doc</Nav.Link>
            <Nav.Link href="#"><img src={teeth} class="side-icons"/> Dentist</Nav.Link>
            <Nav.Link href="#"><img src={teeth} class="side-icons"/> Dentist</Nav.Link>
            <Nav.Link href="#"><img src={eye} class="side-icons"/> Eye Doc</Nav.Link>
            <Nav.Link href="#"><img src={teeth} class="side-icons"/> Dentist</Nav.Link>
            <Nav.Link href="#"><img src={teeth} class="side-icons"/> Dentist</Nav.Link>


        </Nav>
        
        </>

    )

}

export default Docsidenav