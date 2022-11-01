import { Nav } from "react-bootstrap";



function Profileaside(){

    return (
        
        <>

        <Nav defaultActiveKey="/home" className="flex-column side-nav profile-side">
            <h4>Profile</h4>

            
            <Nav.Link href="/profile">My Profile</Nav.Link>
            <Nav.Link href="#">Wallet</Nav.Link>
            <Nav.Link href="/card">Cards</Nav.Link>
            <Nav.Link href="/favourites">Favourites</Nav.Link>
            <Nav.Link href="/order-history">Order History</Nav.Link>
            <Nav.Link href="#">Settings</Nav.Link>
            <Nav.Link href="#">Logout</Nav.Link>


        </Nav>
        
        </>

    )

}

export default Profileaside