import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default ({ children, items }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: items === 1 ? items : items + 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: items
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            className='carousel'
            responsive={responsive}
            renderButtonGroupOutside={true}
            itemClass="carousel-item-padding-40-px"
        >
            {children}
        </Carousel>
    );
}
