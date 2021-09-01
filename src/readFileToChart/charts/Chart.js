import React from "react";
import { Col, Row } from "react-bootstrap";
import LineChart from "./LineChart";
import Piecharts from "./Piechats";
import BarchartCustom from "./BarchartCustome";
import SimpleBarChartCustome from "./SimpleBarChartCustome";
import { useEffect } from "react";

export default function Chart(props) {
  useEffect(() => {
    console.log(props.data);
  }, [props.data]);
  return (
    <>
      <Row>
        <Col md="6" className="my-4">
          <ChartData com={<SimpleBarChartCustome data={props.data} />} />
        </Col>{" "}
        <Col md="6" className="my-4">
          <ChartData com={<Piecharts data={props.data} />} />
        </Col>{" "}
        <Col md="6" className="my-4">
          <ChartData com={<BarchartCustom data={props.data} />} />
        </Col>{" "}
        <Col md="6" className="my-4">
          <ChartData com={<LineChart data={props.data} />} />
        </Col>{" "}
      </Row>{" "}
    </>
  );
}
const ChartData = ({ com }) => {
  return <div className="graphCard">{com}</div>;
};
