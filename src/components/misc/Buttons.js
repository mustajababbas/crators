import { Link } from "react-router-dom";

function Button(props){

    return(

        <>
        
         <Link to={props.url} className="custom-btn primary-btn">{props.title}</Link>

        </>

    )

}

export default Button;