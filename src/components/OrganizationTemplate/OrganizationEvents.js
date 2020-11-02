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
                <div className="organization-event-card-title" onClick={this.toggleDisplay} role="button">
                    <h3>{this.props.eventData.eventName}</h3>
                    <div className="organization-event-card-icon">
                        <MdKeyboardArrowRight />
                    </div>
                </div>
                <div className="organization-event-description">
                    {this.props.eventData.description ? documentToReactComponents(this.props.eventData.description.json) : <p></p>}
                </div>
            </div>

        )
    }

}

const OrganizationEvents = ({ acronym, mainEvents }) => {

    return (
        <section className="organization-events">
            <h1 className="main-header">{acronym} Events</h1>
            <div className="sub-line"></div>

            <div className="organization-event-container">
                {mainEvents ? mainEvents.map((eventData, index) => {
                    return (<EventButton key={index} eventData={eventData} />)
                }) : ""}
            </div>
        </section>
    )
}

export default OrganizationEvents