import React, { useState, useEffect} from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Carousel from "../Carousel"
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai"

const About = ({ aboutContent, media, acronym, facebook, twitter, email }) => {
    // console.log(media)
    const [orgPictures, setOrgPictures] = useState([])

    useEffect(() =>{
        setOrgPictures(media)
    }, [media])

    return (
        <section className="organization-about">
            <h1 className="main-header">About {acronym}</h1>
            <div className="sub-line"></div>
            <div className="organization-content">
                {documentToReactComponents(aboutContent)}
            </div>

            <div className="organization-about-carousel-container">
                <Carousel className="carousel" media={media} items={3} style={{ textAlign: "center" }}>
                   
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