import React, { useEffect } from "react";

export default function Minimap({ children, backgroundImage, buildings, positions }) {
    useEffect(() => {
        wrapper.addEventListener("mousemove", e=> {
            // loop clouds
            // loop grass
        })
    })

    const size = 175;

    let wrapper;

    return (
        <div className="minimap">
            <svg xmlns="http://www.w3.org/2000/svg" ref={(c) => (wrapper = c)} viewBox="0 0 1200 500" className="container">
                {backgroundImage && <image preserveAspectRatio="none" href={backgroundImage} height="100%" width="100%" />}
                {buildings && positions && buildings.map((source, index) => <image height={size} width={size} x={positions[index].x} y={positions[index].y} href={source} />)}
                {children}
                <rect x="390" y="470" height="30" width="375" fill="#000" style={{opacity: 0.5}} />
                <text x="400" y="490" fill='#fff' className="click-text">CLICK ON THE BUILDINGS FOR A SURPRISE!</text>
            </svg>
        </div>
    )
}