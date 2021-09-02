import React from "react";
import { BarChart, XAxis, YAxis, ResponsiveContainer, Bar } from "recharts";

export default function SimpleBarChartCustome(props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={props.data}>
        <Bar dataKey="uv" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </ResponsiveContainer>
  );
}
