import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Leftslider } from "../components";
import StepOne from "../components/Signup/StepOne"
import StepTwo from "../components/Signup/StepTwo"
import StepThree from "../components/Signup/StepThree";

function Signup(){

    

     //state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    fullName: "",
    qualification:"",
    labName:"",
    businessName:"",
    gender:"",
    email:"",
    phone:"",
    address:"",
    front:"",
    back:"",
    userName:"",
    password:"",
    confirmPass:""

  })

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }

  const [showhide, SetShowhide] = useState("");

  const handleshowhide = (e) => {
    const getuser = e.target.value;
    SetShowhide(getuser);
  };


  return(

    <>

<div className="login">

    <Container fluid className="h-100">

    <Row className="h-100">

        <Col lg={6}>

            <Leftslider/>

        </Col>

        <Col lg={6}>

         <div className="login-right">

            
        
                {(() => {
                switch (step) {
                // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
                case 1:
                return (
                    
                    
                <StepOne showhide={showhide} handleshowhide={handleshowhide} nextStep={nextStep} handleFormData={handleInputData} values={formData} />
                      
                  
                );

                // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
                case 2:
                  return (
                  showhide != 'user' ?
                    
                   
                    <StepTwo showhide={showhide} nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                        
                    
                    :<StepThree showhide={showhide} nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />

                    );
               
                case 3:
                return (
                
                
                  <StepThree showhide={showhide} nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                    
                    
                );
                // default case to show nothing
                default:
                return (
                
                    <Container>
                        <h1>Redirecting now</h1>
                    </Container>

                );
            }

                })()}

            <div className="dont-have-account">
               <p>
                Don’t have an account? <Link to={"/login"}>Sign In</Link>
                </p>
                </div>

            </div>
        </Col>

    </Row>

    </Container>

    </div>

    </>
  )




}

export default Signup;