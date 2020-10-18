import React, { useState, useRef } from 'react'
import { gsap } from "gsap";

const EventLine = (props) => {

    // Setting Default Position of Active depending on day
    var date = new Date();
    var startDate = new Date('11/16/2020')
    var diffTime = date - startDate;
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    var openEvent = 0
    if (diffDays <= 0) {
        openEvent = 1
    }
    else if (diffDays >= 4) {
        openEvent = 4
    }
    else {
        openEvent = diffDays + 1
    }

    const [eventDay, setEventDay] = useState(openEvent);
    const { events } = props

    const contentRef = useRef(null)

    // Animation for change state
    const changeContent = (day) => {

        setEventDay(day)
    }


    return (
        <section>
            <h2 className="main-header">More Events</h2>
            <div className="events__event-line">
                <div className="events__progress" style={{ width: `${(eventDay - 1) / 3 * 100}%` }}></div>
                <div className="events__event-line-items">
                    {events.map(event => {
                        return (
                            <div key={event.id} className={eventDay == event.id ? "item active current" : eventDay >= event.id ? "item active" : "item"} onClick={() => changeContent(event.id)}>
                                <div className="item-subTitle">
                                    {event.subTitle}
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
            <div ref={contentRef} className="events__event-content">
                <div className="event-image"></div>
                <div className="event-info">
                    <h3>{events[eventDay - 1].title}</h3>
                    <p>{events[eventDay - 1].content}</p>
                    <button className="event-button">Register</button>
                </div>
            </div>
        </section>
    )
}

export default EventLine

