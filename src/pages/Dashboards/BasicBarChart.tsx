import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";

const BasicBarChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);
    //basic bar
    const series = [{
        data: [400, 430, 448, 470, 540]
    }];
    var options : any = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        colors: chartColors,
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Harga','Tempat','Rasa','Tempat','Jarak'],
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series || []}
                data-chart-colors='["bg-custom-500"]'
                id={chartId}
                className="apex-charts"
                type='bar'
                height={200}
            />
        </React.Fragment>
    );
};

export {
    BasicBarChart
};