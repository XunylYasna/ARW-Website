import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import Carousel from "../Carousel"
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Img from 'gatsby-image'



const About = ({ aboutContent, media, acronym, facebook, twitter, email }) => {

    const items = media.map((data, index) => (
        <div key={index} className="react-multi-carousel-item" style={{
            minWidth: '300px',
            minHeight: '300px',
            maxHeight: '300px',
            maxWidth: '300px',
            background: 'var(--color-primary)'
        }}>
            <Img draggable={false} fixed={data.fixed} style={{
                width: '100%',
                height: '100%',
                minHeight: '300px',
                minWidth: '300px',
                objectFit: 'cover',
            }} />
        </div>
    ))
    
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    

    return (
        <section className="organization-about">
            <h1 className="main-header">About {acronym}</h1>
            <div className="sub-line"></div>
            <div className="organization-content">
                {documentToReactComponents(aboutContent)}
            </div>

            <div className="organization-about-carousel-container">
                {/* {media.length > 0 ? <div>labas ng carousel </div> : <div>lnc media is less than 0</div>} */}
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    mouseTracking={true}
                    disableButtonsControl={true}
                >
                    
                </AliceCarousel>
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