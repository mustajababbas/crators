import user from "../../assets/images/user.png"
import bell from "../../assets/images/bell.png"
import notification from "../../assets/images/notification.png"
import chat from "../../assets/images/messenger.png"
import { Link } from "react-router-dom";


function Userheader(props){

    const onClick = (e) => {
        e.preventDefault()
      }

    return(

        <>

            <div className="dashboard-header">

                <div>
                    <h4 className="market-name">{props.name}</h4>
                    <h4>Dashboard</h4>
                </div>

                <div>

                    <img src={user} className="user-avatar mx-4"/>

                    <span className="noti-icons">
                        <Link to onClick={onClick}>
                            <img src={bell}  width="30"/>
                            <span className="yellow">5</span>
                        </Link>
                    </span >

                    <span className="noti-icons">
                        <Link to onClick={onClick}>
                        <img src={chat} width="30"/>
                        <span className="purple">3</span>
                        </Link>
                    </span>

                </div>

            </div>

        </>

    )

}

export default Userheader