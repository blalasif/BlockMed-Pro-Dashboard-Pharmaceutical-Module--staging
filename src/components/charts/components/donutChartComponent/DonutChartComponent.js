"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DonutChartComponent = ({ series, colors, labels }) => {

    const options = {
        chart: {
            type: 'donut',
        },
        legend: {
            show: false
        },
        stroke: {
            width: 0,
        },
        dataLabels: {
            enabled: false,
        },
        labels: labels,
        colors: colors,
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 275
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={options} series={series} height={300} type="donut" />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default DonutChartComponent;
