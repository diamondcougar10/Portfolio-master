import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            {/* If a video is provided, render a looping, autoplaying video */}
            {props.videoPath ? (
                <video
                    width="100%"
                    height="auto"
                    loop
                    muted
                    autoPlay
                    playsInline
                    className="project-video"
                >
                    <source src={props.videoPath} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <Card.Img variant="top" src={props.imgPath} alt="project-img" />
            )}

            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>

                {/* GitHub Link */}
                {props.ghLink && (
                    <Button variant="primary" href={props.ghLink} target="_blank">
                        <BsGithub /> &nbsp;
                        {props.isBlog ? "Blog" : "GitHub"}
                    </Button>
                )}

                {/* Demo Link */}
                {props.demoLink && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{ marginLeft: "10px" }}
                    >
                        <CgWebsite /> &nbsp; {"Demo"}
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;

