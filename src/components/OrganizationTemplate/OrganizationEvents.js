import React, { Component } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { MdKeyboardArrowRight } from 'react-icons/md'

class EventButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }
    }

    toggleDisplay = () => {
        this.setState({ clicked: !this.state.clicked })
    }



    render() {
        let card_class = this.state.clicked ? "show" : "hide";

        return (
            <div className={"organization-event-card " + card_class}>
                <div className="organization-event-content">
                    <div className="organization-event-front" >
                        <h3>{this.props.eventData.eventName}</h3>
                    </div>
                    <div className="organization-event-back">
                        {this.props.eventData.description ? documentToReactComponents(this.props.eventData.description.json) : <p>No description</p>}
                    </div>
                </div>
            </div>

        )
    }

}

const OrganizationEvents = ({ acronym, mainEvents }) => {

    return (
        <section className="organization-events">
            {mainEvents ? (
                <>
                    <h1 className="main-header">{acronym} Events</h1>
                    <div className="sub-line"></div>

                    <div className="organization-event-container">
                        {mainEvents.map((eventData, index) => {
                            return (<EventButton key={index * -1} eventData={eventData} />)
                        })}
                    </div>
                </>
            ) : ""}
        </section>
    )
}

export default OrganizationEvents