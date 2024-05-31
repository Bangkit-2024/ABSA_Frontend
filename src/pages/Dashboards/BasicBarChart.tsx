import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "slices";
import { countAspects } from "helpers/processdata/process";
import { useSelector } from "react-redux";

const BasicBarChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);
    const selectReview = createSelector(
        (state: RootState) => state.Review,
        (review) => ({
            series: [{data:countAspects(review.reviews)}]
        })
      );
    const {series} = useSelector(selectReview)
    //basic bar

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