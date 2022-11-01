import icon1 from "../../assets/images/icon.png"
import icon2 from "../../assets/images/icon2.png"
import icon3 from "../../assets/images/icon3.png"
import slider1 from "../../assets/images/order.png"
import Slider from "react-slick";

function Leftslider(){

    const login = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


    return(

        <>
        
        <div className="login-left">

                                <img src={icon1} className="icon icon1"/>
                                <img src={icon2} className="icon icon2"/>
                                <img src={icon3} className="icon icon3"/>

                                <div className="login-slider">

                                    <Slider {...login}>

                                        <div className="slides">
                                            <img src={slider1}/>

                                            <h2>
                                            Order Drugs in <br/>
                                            Wholesale and Retail
                                            </h2>
                                        </div>

                                        <div className="slides">
                                            <img src={slider1}/>

                                            <h2>
                                            Order Drugs in <br/>
                                            Wholesale and Retail
                                            </h2>
                                        </div>

                                        <div className="slides">
                                            <img src={slider1}/>

                                            <h2>
                                            Order Drugs in <br/>
                                            Wholesale and Retail
                                            </h2>
                                        </div>
                                        
                                    </Slider>

                                </div>

                            </div>

        </>

    )
}

export default Leftslider;