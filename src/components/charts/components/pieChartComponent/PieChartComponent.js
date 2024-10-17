"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const PieChartComponent = ({ flow, width, labels, colors, series, type }) => {

    const options = {
        chart: {
            width: width,
            type: type,
        },
        dataLabels: {
            enabled: false,
        },
        labels: labels,
        colors: colors,
        legend: {
            show: false,
        },
        stroke: {
            width: 0,
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 250
                },
                legend: {
                    position: "bottom"
                }
            }
        }]
    };

    return (
        <div id="chart" className={`${flow === "vertical" ? `min-h-[${width}px]` : `min-h-[${width}px]`}`}>
            <ReactApexChart options={options} series={series} type={type} width={width} />
        </div>
    );
};

export default PieChartComponent;
