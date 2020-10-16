import React from "react";
import Slider from "react-slick";

export default ({ children, className }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <Slider className={className} {...sliderSettings} >
            {children}
        </Slider>
    );
}
