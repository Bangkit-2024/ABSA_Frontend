import useChartColors from "Common/useChartColors";
import React from "react";
import ReactApexChart from "react-apexcharts";

const SimplePie = ({ chartId }: any) => {
  const chartColors = useChartColors(chartId);

  const series = [20, 30, 35]
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