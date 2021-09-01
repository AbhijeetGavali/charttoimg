import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReadFileToChart from "./readFileToChart/ReadFileToChart";

export default function App() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center my-4">
          <Col md="auto">
            Excel to chart convertor.
            <hr />
          </Col>
        </Row>
        <ReadFileToChart />
      </Container>
    </>
  );
}
