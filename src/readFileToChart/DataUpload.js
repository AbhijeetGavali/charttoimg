import React, { useState } from "react";
import XLSX from "xlsx";
import { Button, Form } from "react-bootstrap";

export default function DataUpload(props) {
  const [excel, setExcel] = useState(null);

  function showCharts(file) {
    const promise = new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = function (e) {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "buffer" });
        const wsname = workbook.SheetNames[0];
        const workSheet = workbook.Sheets[wsname];
        var ex = XLSX.utils.sheet_to_json(workSheet);
        resolve(ex);
      };
      reader.onerror = (err) => {
        reject(err);
      };
    });
    promise.then((data) => {

      props.setData(data);
    });
  }

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          showCharts(excel);
        }}
      >
        <Form.Group controlId="formFileLg">
          <Form.Control
            type="file"
            onChange={(e) => {
              setExcel(e.target.files[0]);
            }}
            style={{ display: "none" }}
            accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          />
          <Form.Label id="uploadLable" className="p-3">
            {excel === null
              ? "DRAG FILES HERE (excel/xsl)"
              : excel.name + " File Selected"}
          </Form.Label>
        </Form.Group>
        <div className="text-center">
          <Button
            as="input"
            type="submit"
            value="Generate Graphs"
            variant="primary"
            id="uploadButton"
            size="lg"
            className="my-3"
            active
          />
        </div>
      </Form>
    </>
  );
}
