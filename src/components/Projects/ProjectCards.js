import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            {/* Check if a video path exists, otherwise show an image */}
            {props.videoPath ? (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: "100%", borderRadius: "10px" }}
                >
                    <source src={props.videoPath} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            )}

            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>

                {/* GitHub Button */}
                {props.ghLink && (
                    <Button variant="primary" href={props.ghLink} target="_blank">
                        <BsGithub /> &nbsp;
                        {props.isBlog ? "Blog" : "GitHub"}
                    </Button>
                )}

                {"\n"}
                {"\n"}

                {/* Demo Button (Only if it's not a blog and has a demo link) */}
                {!props.isBlog && props.demoLink && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{ marginLeft: "10px" }}
                    >
                        <CgWebsite /> &nbsp;
                        {"Demo"}
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;
