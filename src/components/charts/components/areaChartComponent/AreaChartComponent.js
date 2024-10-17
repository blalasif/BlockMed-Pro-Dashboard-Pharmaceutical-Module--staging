"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const AreaChartComponent = ({ data, selectedOption }) => {
    const series = selectedOption ? data?.yAxis[selectedOption] : data?.yAxis;

    const options = {
        chart: {
            height: 350,
            type: 'area',
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        colors: ["#4318FF", "#000000"],
        legend: {
            show: false
        },
        grid: {
            show: true,
            borderColor: '#ededed'
        },
        xaxis: {
            categories: data?.xAxis,
            axisBorder: {
                show: true,
                color: '#969696',
                height: 1,
                width: '100%',
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    color: '#969696',
                    fontSize: '12px',
                    fontFamily: "Inter"
                }
            }
        },
        yaxis: {
            axisBorder: {
                show: true,
                color: '#969696'
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    color: '#969696',
                    fontSize: '12px',
                    fontFamily: "Inter"
                }
            }
        },
        tooltip: {
            custom: ({ dataPointIndex, w }) => {
                const ageRange = w.globals.categoryLabels[dataPointIndex];
                const maleValue = w.config.series[0].data[dataPointIndex];
                const femaleValue = w.config.series[1].data[dataPointIndex];
                const xAxisValue = w.config.series[0].data[dataPointIndex];
                const yAxisValue = w.config.series[1].data[dataPointIndex];

                return `
                <div style="padding-top: 0.5rem; padding-bottom: 0.5rem; width: 140px ; 1rem; background: linear-gradient(155deg, #ad00ff 0%, #007ee0 80%); border-radius: 6px;" >
                    <div style="color: #fff; display:flex; flex-direction: column; align-items: center">
                        <p style="margin: 0; font-size: 12px;">Age ${ageRange}</p>
                        <p style="margin: 0; font-size: 18px; font-weight: 700">${xAxisValue}/${yAxisValue}</p>
                        <p style="margin: 0; font-size: 12px;">${maleValue} Male</p>
                        <p style="margin: 0; font-size: 12px;">${femaleValue} Female</p>
                    </div>
                </div>`
            }
        },
    };

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={options} series={series} type="area" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default AreaChartComponent;
