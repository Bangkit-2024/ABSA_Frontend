import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";

import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "slices";

import {generateSeries} from 'helpers/processdata/process'


const StackedBarChart = ({ chartId }: any) => {

    const selectReview = createSelector(
        (state: RootState) => state.Review,
        (review) => ({
            series: generateSeries(review.reviews)
        })
      );

    const chartColors = useChartColors(chartId);
    //Stacked Charts
    const {series} = useSelector(selectReview)

    

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