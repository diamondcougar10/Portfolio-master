import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <img
        src="https://ghchart.rshah.org/c084f5/diamondcougar10"
        alt="diamondcougar10's Github chart"
        style={{ maxWidth: "100%", padding: "10px" }}
      />
    </Row>
  );
}

export default Github;
