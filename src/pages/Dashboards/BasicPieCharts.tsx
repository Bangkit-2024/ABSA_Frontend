import { createSelector } from "@reduxjs/toolkit";
import useChartColors from "Common/useChartColors";
import { countSentiment } from "helpers/processdata/process";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { RootState } from "slices";

const SimplePie = ({ chartId }: any) => {
  const chartColors = useChartColors(chartId);

  const selectReview = createSelector(
    (state: RootState) => state.Review,
    (review) => ({
        series: countSentiment(review.reviews)
    })
  );
  const {series} = useSelector(selectReview)

  var options: any = {
    chart: {
      height: 350,
      type: 'pie',
    },
    labels: ['Positif','Negatif','Netral'],
    colors: chartColors,
    legend: {
      position: 'bottom'
    }
  };

  return (
    <React.Fragment>
      <ReactApexChart
        dir="ltr"
        options={options}
        series={series || []}
        data-chart-colors='["bg-green-500", "bg-red-500", "bg-gray-500"]'
        id={chartId}
        className="apex-charts"
        height={200}
        type="pie"
      />
    </React.Fragment>
  );
};


export default SimplePie;