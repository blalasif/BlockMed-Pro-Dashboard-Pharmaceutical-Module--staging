"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ColumnChartComponent = ({ data, selectedOption, height }) => {
    const series = [{
        data: selectedOption ? data?.yAxis[selectedOption] : data?.yAxis
    }];

    const options = {
        chart: {
            height: height,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        colors: ["#4433ff", "#4433ff", "#4433ff", "#4433ff", "#4433ff"],
        plotOptions: {
            bar: {
                columnWidth: '40%',
                borderRadius: 12,
                distributed: true,
                colors: {
                    backgroundBarColors: [],
                    backgroundBarOpacity: 1,
                },
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: data?.xAxis,
            labels: {
                style: {
                    fontSize: '12px',
                    color: '#ededed',
                }
            },
            axisBorder: {
                show: true,
                color: '#EDEDED',
                height: 1,
                width: '100%',
                offsetX: 0,
                offsetY: 0
            },
            axisTicks: {
                show: false,
            }
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return value + "%";
                },
                style: {
                    fontSize: '12px',
                    fontWeight: 400,
                    color: '#ededed'
                },
            },
            axisBorder: {
                show: true,
                color: '#EDEDED'
            },
            axisTicks: {
                show: false,
            }
        },
        grid: {
            show: false,
        },
        tooltip: {
            custom: ({ series, seriesIndex, dataPointIndex }) => {
                const value = series[seriesIndex][dataPointIndex];

                return `
                    <div style="padding-left: 1rem; padding-right: 1rem; padding-top: 0.5rem; padding-bottom: 0.5rem; background: #000000; border: none; border-radius: 6px;">
                        <div style="display: flex; align-items: center;">
                            <span style="font-weight: bold; color: #fff">${value}%</span>
                        </div>
                    </div>
                `;
            }
        }
    };

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="bar" height={height} />
        </div>
    );
};

export default ColumnChartComponent;
