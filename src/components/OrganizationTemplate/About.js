import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import Carousel from "../Carousel"
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
                {/* <Carousel className="carousel" media={media} items={3} style={{ textAlign: "center" }}>
                   
                </Carousel> */}
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
                    {/* <div style={{
                            minWidth: '300px',
                            minHeight: '300px',
                            background: 'var(--color-primary)'
                        }}> Organization Pictures </div> */}
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