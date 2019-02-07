import React, { Component } from 'react';
import "./About.css";
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowRight)

class AboutPage extends Component {
    render() {
        return (
        <BrowserRouter>
            <div className="aboutPageWrapper">
                <div className="aboutPageNavigation">
                    <div className="aboutPageBackButton">
                        <a href="/">
                            browse give-aways
                            <FontAwesomeIcon icon="arrow-right" className="icon_rightArrow" />
                        </a>
                    </div>
                </div>

                <div className="aboutPageHeader">
                    Give Away
                </div>


                <div className="aboutPageStatements">
                    <div className="aboutPageAbout">
                        <div className="aboutPageLabel">
                            About
                        </div>
                        <div className="aboutPageInfo">
                            "A kind gesture can reach a wound that only compassion can heal" -- Steve Maraboli
                        </div>
                    </div>
                   
                   <div className="aboutPageMission">
                        <div className="aboutPageLabel">
                            Mission
                        </div>
                        <div className="aboutPageInfo">
                            Will fill out this later
                        </div>
                   </div>
                </div>
            </div>
        </BrowserRouter>
        )
    }

}

export default (AboutPage);