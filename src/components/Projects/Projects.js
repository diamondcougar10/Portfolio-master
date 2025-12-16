import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import cubeVid from "../../Assets/Projects/cubeVid.mp4";
import boopitVid from "../../Assets/Projects/Boopitdemo.mp4";
import spaceSimVid from "../../Assets/Projects/SpaceSimDemo - Made with Clipchamp.mp4";
import fpsVid from "../../Assets/Projects/ConFps.mp4";
import sixDofVid from "../../Assets/Projects/6dof.mp4"; // Import the 6DOF video
import webineerImg from "../../Assets/Projects/webineer.png"; // Import the Webineer image
import pspv2Img from "../../Assets/Projects/PSPv2.png"; // Import the PSPv2 image
import voidDriftVid from "../../Assets/Projects/VoidDrift.mp4"; // Import the Void Drift video

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                    {/* Webineer Website Builder */}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={webineerImg}
                            isBlog={false}
                            title="Webineer - AI Website Builder"
                            description="An intelligent website builder powered by AI that helps users create professional websites quickly and efficiently with drag-and-drop functionality and smart design suggestions."
                            ghLink="https://github.com/diamondcougar10/Webineer"
                            demoLink="https://github.com/diamondcougar10/Webineer"
                        />
                    </Col>

                    {/* PSPv2 Emulator */}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={pspv2Img}
                            isBlog={false}
                            title="PSPv2 - PlayStation Portable Emulator"
                            description="A custom-built PlayStation Portable emulator inspired by the original console design. Features a built-in emulator capable of playing any PSP ROM with authentic hardware emulation."
                            ghLink="https://github.com/diamondcougar10/PSPv2"
                            demoLink="https://github.com/diamondcougar10/PSPv2"
                        />
                    </Col>

                    {/* Space Sim Game */}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            videoPath={spaceSimVid}
                            isBlog={false}
                            title="Space Sim - 6DOF Motion Game"
                            description="A space simulation game designed to control a 6DOF motion platform using in-game movement data."
                            ghLink="https://github.com/diamondcougar10/SpaceSim.git"
                            demoLink="https://www.linkedin.com/posts/ryan-curphey-729a98268_my-project-demo"
                        />
                    </Col>

                    {/* Void Drift */}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            videoPath={voidDriftVid}
                            isBlog={false}
                            title="Void Drift - Reactive Pulse Orb"
                            description="A reactive pulse orb visualization created with SFML and C++. Features dynamic particle effects, glowing visuals, and waveform bars that respond to space physics. Future updates will add advanced physics and enhanced visuals."
                            ghLink="https://github.com/diamondcougar10"
                            demoLink="https://youtu.be/MTRkFo8m3H4?si=mWtFU-pym7Nozz7p"
                        />
                    </Col>

                    {/* AI Chatbot */}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatify}
                            isBlog={false}
                            title="AI ChatBot"
                            description="Offline AI chatbot built in C++, designed to function like an advanced personal assistant without requiring an internet connection."
                            ghLink="https://github.com/diamondcougar10/RyansSearchEngine"
                            demoLink="https://youtu.be/C4Zp2lRKu9A"
                        />
                    </Col>

                    {/* 3D Rotating Cube */}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            videoPath={cubeVid}
                            isBlog={false}
                            title="3D Rotating Cube"
                            description="A real-time rendered 3D cube, demonstrating transformation matrices including world, view, and projection."
                            ghLink="https://github.com/diamondcougar10/RoatingCube.git"
                            demoLink="https://youtu.be/81mVAITv6jM"
                        />
                    </Col>

                    {/* BoopIt VR Game */}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            videoPath={boopitVid}
                            isBlog={false}
                            title="BoopIt - Reflex-Based VR Game"
                            description="A fun and engaging VR game designed to test reflexes and coordination using quick hand gestures."
                            ghLink="https://github.com/diamondcougar10/BoopIt"
                            demoLink="https://youtu.be/your-video-link"
                        />
                    </Col>

                    {/* Retro FPS Game */}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            videoPath={fpsVid}
                            isBlog={false}
                            title="Retro FPS - Console Doom-Style Game"
                            description="A retro first-person shooter styled after Doom, built entirely in a console-based environment using C++."
                            ghLink="https://github.com/diamondcougar10/First-person-Maze-Console-App.git"
                            demoLink="https://youtu.be/your-fps-demo"
                        />
                    </Col>

                    {/* 6DOF Motion Platform - Placed Last */}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            videoPath={sixDofVid} // Video instead of image
                            isBlog={false}
                            title="6DOF Motion Platform"
                            description="A custom-built 6 Degrees of Freedom motion platform, designed for real-time simulation and motion feedback. Integrated with game data for realistic movement and response."
                            ghLink="https://github.com/diamondcougar10/MotionBasePlatformCode.git"
                            demoLink="https://www.linkedin.com/posts/ryan-curphey-729a98268_my-first-demo-video-of-my-platform-and-a-activity-7201335272624504832-62je?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGoCxEBp8DMew3cznQ5_wmtgjaLcps7kzI" // Replace with actual demo link
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
