"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { fShortenNumber } from '@/helpers/Helpers';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const HorizontalBarChartComponent = ({ colors }) => {
    const [series] = useState([
        {
            name: "Male",
            data: [4000, 7000, 4000, 6000, 9000, 5000, 2500]
        },
        {
            name: "Female",
            data: [3000, 8000, 3300, 8000, 6000, 3000, 2000]
        }
    ]);

    const options = {
        chart: {
            type: 'bar',
            height: 430,
            toolbar: {
                show: false
            }
        },
        colors: colors,
        plotOptions: {
            bar: {
                horizontal: true,
                borderRadius: 6,
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
        },
        tooltip: {
            shared: false,
            intersect: true,
            custom: ({ series, seriesIndex, dataPointIndex, w }) => {
                const value = series[seriesIndex][dataPointIndex];
                const sex = w.config.series[seriesIndex].name;

                return `
                    <div style="padding-left: 1rem; padding-right: 1rem; padding-top: 0.5rem; padding-bottom: 0.5rem; background: #000000; border: none; border-radius: 6px;">
                        <div style="display: flex; align-items: center;">
                        <span style="font-weight: bold; color: #fff">${sex}</span>
                            <span style="font-weight: bold; color: #fff; margin-left:1rem">${fShortenNumber(value)}</span>
                        </div>
                    </div>
                `;
            }
        },
        xaxis: {
            categories: ["54-60", "47-53", "40-46", "33-39", "26-32", "19-25", "12-18"],
            labels: {
                formatter: function (value) {
                    return fShortenNumber(value);
                },
                style: {
                    fontSize: '14px',
                    color: '#ededed',
                }
            },
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '14px',
                    color: '#ededed',
                }
            },
        },
        grid: {
            show: false
        },
        legend: {
            show: false
        }
    };

    return (
        <div id="chart" className="w-full">
            <ReactApexChart options={options} series={series} type="bar" height={400} />
        </div>
    );
};

export default HorizontalBarChartComponent;
