import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { exportComponentAsPNG } from "react-component-export-image";

import SimpleBarChartCustome from "./SimpleBarChartCustome";
import Piecharts from "./Piechats";
import BarchartCustom from "./BarchartCustome";
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
            <ChartData com={<BarchartCustom data={props.data} />} />
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
  const [magnify, setMagnify] = useState(false);
  const ref = useRef();
  return (
    <>
      <div className="custom-btn">
        <button
          className="btn btn-sm"
          onClick={() => {
            setMagnify(!magnify);
          }}
        >
          <i className="fas fa-eye" />
        </button>
        <button
          className="btn btn-sm "
          onClick={() => exportComponentAsPNG(ref)}
        >
          <i className="fas fa-download" />
        </button>
      </div>
      <div ref={ref} className="graphCard">
        {props.com}
      </div>
      {magnify ? (
        <div className="graphCardFull">
          <div ref={ref} className="graphCard graphCardF">
            <div className="custom-btn custom-btnF">
              <button
                className="btn btn-sm"
                onClick={() => {
                  setMagnify(!magnify);
                }}
              >
                <i className="fas fa-eye" />
              </button>
              <button
                className="btn btn-sm "
                onClick={() => exportComponentAsPNG(ref)}
              >
                <i className="fas fa-download" />
              </button>
            </div>
            {props.com}
          </div>
          <div
            className="graphCardFulloverlay"
            onClick={() => {
              setMagnify(!magnify);
            }}
          ></div>
        </div>
      ) : null}
    </>
  );
});
