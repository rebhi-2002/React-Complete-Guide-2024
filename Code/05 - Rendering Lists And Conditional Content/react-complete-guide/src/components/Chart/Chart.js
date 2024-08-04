import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {/*
        ** Repeated [<ChartBar />] 12 Times **
        - we now wanna have the bars and we could simply render 12 individual chart
        - bars for the 12 months which we have. But I will actually create a bit of
        - a more flexible chart which is actually not necessarily restricted to
        - months and to 12 data points. Instead, we could say that when the chart
        - component is being used somewhere in our application, we wanna receive the
        - data points that should be plotted as props.
      */}

      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
