import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "slices";
import { countAspects } from "helpers/processdata/process";
import { useSelector } from "react-redux";
import { ASPECT_LIST } from "Common/constants/constant";

const BasicBarChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);
    const selectReview = createSelector(
        (state: RootState) => state.Review,
        (review) => ({
            series: [{data:countAspects(review.reviews,ASPECT_LIST)}]
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
            categories: ASPECT_LIST,
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