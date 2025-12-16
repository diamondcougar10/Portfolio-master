import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple"> Ryan Curphey </span>
                        from <span className="purple"> Casselberry, Florida, USA. </span>
                        <br />
                        I am a <strong> Simulation Engineer </strong> with expertise in VR/AR development, military training simulations, and embedded systems.
                        <br />
                        I graduated <strong> Valedictorian </strong> from <span className="purple"> Full Sail University </span> with a degree in Simulation & Visualization Technology.
                        <br />
                        I have professional experience in <strong> Unreal Engine 5, C++, C#, and Python </strong>, working on simulation production, networking, and system integration.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Developing VR & AR Applications
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Building & Repairing Computers
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Experimenting with Embedded Systems & PCB Design
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> 3D Printing & CAD Design
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Linux Systems & Cybersecurity
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer"> Ryan Curphey </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
