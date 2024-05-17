import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";

const StackedBarChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);
    //Stacked Charts
    const series = [{
        name: 'Positif',
        data: [44, 55, 41, 37,15]
    }, {
        name: 'Negatif',
        data: [53, 32, 33, 52, 13]
    }, {
        name: 'Netral',
        data: [12, 17, 11, 9, 15]
    }];
    var options : any = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    total: {
                        enabled: true,
                        offsetX: 0,
                        style: {
                            fontSize: '13px',
                            fontWeight: 900
                        }
                    }
                }
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        xaxis: {
            categories: ['Harga','Pelayanan','Rasa','Tempat','Jarak'],
            labels: {
                formatter: function (val : any) {
                    return val
                }
            }
        },
        yaxis: {
            title: {
                text: undefined
            },
        },
        tooltip: {
            y: {
                formatter: function (val : any) {
                    return val
                }
            }
        },
        colors: chartColors,
        fill: {
            opacity: 1
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
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
                type='bar'
                height={350}
            />
        </React.Fragment>
    );
};

export {
    StackedBarChart
};