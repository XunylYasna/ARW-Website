import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import Carousel from "../Carousel"
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai"
import InfiniteCarousel from 'react-leaf-carousel'
import Img from 'gatsby-image'

const About = ({ aboutContent, media, acronym, facebook, twitter, email }) => {
    const items = 3
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
    }

    return (
        <section className="organization-about">
            <h1 className="main-header">About {acronym}</h1>
            <div className="sub-line"></div>
            <div className="organization-content">
                {documentToReactComponents(aboutContent)}
            </div>

            <div className="organization-about-carousel-container">
                {/* {media.length > 0 ? <div>labas ng carousel </div> : <div>lnc media is less than 0</div>} */}
                <InfiniteCarousel
                    breakpoints={[
                    {
                        breakpoint: 500,
                        settings: {
                        slidesToShow: 1,
                        slidesToScroll: media.length,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                        slidesToShow: 3,
                        slidesToScroll: media.length/3,
                        },
                    },
                    ]}
                    dots={false}
                    showSides={false}
                    slidesToScroll={3}
                    slidesToShow={media.length/3}
                    scrollOnDevice={true}
                >
                    {/* {media.length > 0 ? <div>hello</div> : <div>media is less than 0</div>} */}
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
                </InfiniteCarousel>
            </div>

            <div className="organization-about-socials">
                <h2>Connect with {acronym}</h2>
                <div>
                    {facebook ? <a href={facebook} rel="noopener noreferrer" target="_blank"><FaFacebookSquare></FaFacebookSquare></a> : ""}
                    {twitter ? <a href={twitter} rel="noopener noreferrer" target="_blank"><FaTwitterSquare></FaTwitterSquare></a> : ""}
                    {email ? <a href={"mailto:" + email} rel="noopener noreferrer" target="_blank"><AiOutlineMail></AiOutlineMail></a> : ""}
                </div>
            </div>
        </section>
    )
}

export default About