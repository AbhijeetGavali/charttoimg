import React, { useRef } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { exportComponentAsPNG } from "react-component-export-image";

import SimpleBarChartCustome from "./SimpleBarChartCustome";
import Piecharts from "./Piechats";
// import BarchartCustom from "./BarchartCustome";
import LineChart from "./LineChart";

export default function Chart(props) {
  useEffect(() => {
    console.log(props.data);
  }, [props.data]);

  return (
    <>
      <React.Fragment>
        <Row>
          <Col md="6" className="my-4">
            <ChartData com={<SimpleBarChartCustome data={props.data} />} />
          </Col>{" "}
          <Col md="6" className="my-4">
            <ChartData com={<Piecharts data={props.data} />} />
          </Col>{" "}
          <Col md="6" className="my-4">
            {/* <ChartData com={<BarchartCustom data={props.data} />} /> */}
          </Col>{" "}
          <Col md="6" className="my-4">
            <ChartData com={<LineChart data={props.data} />} />
          </Col>{" "}
        </Row>{" "}
      </React.Fragment>
    </>
  );
}

const ChartData = React.forwardRef((props) => {
  const ref = useRef();
  return (
    <div ref={ref} className="graphCard">
      <div className="custom-btn">
        <button className="btn btn-sm">View</button>
        <button
          className="btn btn-sm "
          onClick={() => exportComponentAsPNG(ref)}
        >
          Export{" "}
        </button>
      </div>
      {props.com}
    </div>
  );
});
