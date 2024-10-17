"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BasicAreaChart = ({ data, selectedOption }) => {
    const options = {
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'straight',
        },
        labels: data.xAxis,
        xaxis: {
            type: 'category',
            labels: {
                style: {
                    color: "#969696",
                    fontSize: "12px",
                },
            },
        },
        grid: {
            show: false
        },
        colors: data?.colors,
        yaxis: {
            axisBorder: {
                show: true,
                color: '#ededed'
            },
            labels: {
                formatter: (value) => `${value} kg`,
                style: {
                    color: "#969696",
                    fontSize: "12px",
                },
            },
            opposite: false,
        },
        tooltip: {
            custom: ({ series, seriesIndex, dataPointIndex }) => {
                const value = series[seriesIndex][dataPointIndex];

                return `
                    <div style="padding-left: 1rem; padding-right: 1rem; padding-top: 0.5rem; padding-bottom: 0.5rem; background: #000000; border: none; border-radius: 6px;">
                        <div style="display: flex; align-items: center;">
                        <span style="font-weight: semi-bold; color: #fff">${value}kg</span>
                        </div>
                    </div>
                `;
            }
        },
    };

    const series = [{
        data: data.yAxis[selectedOption],
    }];

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={options} series={series} type="area" height={350} />
            </div>
        </div>
    );
};

export default BasicAreaChart;
