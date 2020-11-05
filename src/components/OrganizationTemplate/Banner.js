import React, { useState } from 'react'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import ModalVideo from "react-modal-video";



const OrganizationBanner = ({ organizationName, acronym, videoLink, logo, background }) => {

    const [isOpen, setOpen] = useState(false);
    const videoId = videoLink.match(/\/([^\/]+)\/?$/)[1]

    console.log(videoLink)
    console.log(videoId)

    return (
        <section className="banner-container">
            <div className="organization-banner">
                {background ?

                    <BackgroundImage className="banner-content" fluid={background.fluid}>
                        <div>
                            <Img className="logo" fixed={logo.fixed} />
                            <h1>{organizationName}</h1>
                            {/* <h2>{acronym}</h2> */}
                        </div>
                        <div className="banner-button">
                            <button className="main-button" onClick={() => setOpen(true)}>
                                Watch the Video!
                        </button>
                        </div>
                    </BackgroundImage>
                    :
                    <div className="banner-content" style={{
                        backgroundColor: "var(--color-primary)"
                    }}>
                        <div>
                            <Img className="logo" fixed={logo.fixed} />
                            <h1>{organizationName}</h1>
                            {/* <h2>{acronym}</h2> */}
                        </div>
                        <div className="banner-button">
                            <button className="main-button" onClick={() => setOpen(true)}>
                                Watch the Video!
                            </button>
                        </div>

                    </div>
                }
            </div>

            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId={videoId}
                onClose={() => setOpen(false)}
            />
        </section>
    )
}

export default OrganizationBanner