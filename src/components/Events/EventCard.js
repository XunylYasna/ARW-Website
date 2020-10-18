import React from 'react'


const EventCard = ({ title, subTitle, img, content }) => {

    return (
        <div className="events__event-card">
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <p>{content}</p>
        </div>
    )
}

export default EventCard