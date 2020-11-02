import React, { useEffect } from "react";

import { TimelineLite } from "gsap";
import AniLink from "gatsby-plugin-transition-link/AniLink";

// export default function Minimap({ children, minimap, buildings, positions }) {
export default function Minimap({ children, minimap, buildingSize, organizations }) {
    // useEffect(() => {
    //     wrapper.addEventListener("mousemove", e=> {
    //         // loop clouds
    //         // loop grass
    //     })
    // })

    // const minimapTimeline = new TimelineLite({
    //     pause: true
    // });

    // useEffect(() => {
    //     minimapTimeline
    //         .from(".building", 1, {scale: 0, transformOrigin: "center", ease: "bounce"}, 0.1)
    // })

    let wrapper;

    return (
        <div className="minimap">
            <svg xmlns="http://www.w3.org/2000/svg" ref={(c) => (wrapper = c)} viewBox="0 0 1100 600" className="container">
                {/* Note: preserving the aspect ratio to None is very important */}
                {minimap && <image preserveAspectRatio="none" href={minimap} height="100%" width="100%" />}
                {organizations && organizations.map((org, index) => (
                    <AniLink
                        cover
                        to={'/organizations/' + org.slug}
                        bg="#6666ff"
                        duration={0.7}
                    >
                        {console.log(org.building.src)}
                        <image className="building" height={buildingSize} width={buildingSize} x={org.x} y={org.y} href={org.building.fluid.src} />
                    </AniLink>
                ))}
                {/* {buildings && positions && buildings.map((source, index) => (
                    <AniLink
                        cover
                        to={'#'}
                        bg="#6666ff"
                        duration={0.7}
                        className="header-link"
                    >
                        <image className="building" height={buildingSize} width={buildingSize} x={positions[index].x} y={positions[index].y} href={source} />
                    </AniLink>
                ))} */}
                <rect x="290" y="570" height="30" width="460" fill="#000" style={{opacity: 0.5}} />
                <text x="300" y="590" fill='#fff' className="click-text">CLICK ON THE BUILDINGS FOR A SURPRISE!</text>
                {children}
            </svg>
        </div>
    )
}