import React, { useEffect, useRef } from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar-responsive.css";

function Github() {
  const calendarRef = useRef(null);

  useEffect(() => {
    if (calendarRef.current) {
      GitHubCalendar(calendarRef.current, "diamondcougar10", {
        responsive: true,
        global_stats: false,
      });
    }
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <div ref={calendarRef} className="calendar"></div>
    </Row>
  );
}

export default Github;
