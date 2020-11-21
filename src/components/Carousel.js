import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Img from 'gatsby-image'

export default ({ media, items }) => {
    console.log(media)

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
            items: 2
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
             {media.map((data, index) => (
                <div key={index} className="react-multi-carousel-item" style={{
                    minWidth: '300px',
                    minHeight: '300px',
                    background: 'var(--color-primary)'
                }}>
                    <Img draggable={false} fixed={data.fixed} style={{
                        width: '100%',
                        height: '100%',
                        minHeight: '300px',
                        minWidth: '300px',
                        objectFit: 'cover',
                    }} />
                    {index}
                </div>
             ))}
        </Carousel>
    );
}
