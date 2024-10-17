"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import ContainerCard from '@/components/containerCard/ContainerCard';
import StyledH4Heading from '@/common/components/styledH4Heading/StyledH4Heading';
import StyledMdText from '@/common/components/styledMdText/StyledMdText';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ApexChart = () => {
    const series = [{
        data: [40, 80, 28, 92, 40]
    }];

    const categories = ['USA', 'UK', 'Canada', 'Italy', 'France'];

    const options = {
        chart: {
            type: 'bar',
            height: 260,
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                horizontal: true,
                barHeight: '30px', // Height of each bar
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: categories,
            labels: {
                formatter(val) {
                    return `${val}%`;
                },
                style: {
                    fontSize: '12px',
                    color: '#969696',
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '12px',
                    color: '#969696',
                    fontWeight: 600,
                },
            }
        },
        grid: {
            show: false, // Disable all grid lines
        },
        tooltip: {
            custom: ({ series, seriesIndex, dataPointIndex, w }) => {
                const value = series[seriesIndex][dataPointIndex];
                const category = w.config.xaxis.categories[dataPointIndex];
                const color = w.config.fill.colors[seriesIndex];

                return `
                    <div style="padding: 0.5rem; background: #fff; border: 1px solid #ddd; border-radius: 6px;">
                        <div style="display: flex; align-items: center;">
                            <div style="width: 10px; height: 10px; background-color: ${color}; border-radius: 50%; margin-right: 5px;"></div>
                            <span style="font-weight: bold;">${category}</span>
                            <span style="font-weight: bold; margin-left: 1rem">${value}%</span>
                        </div>
                    </div>
                `;
            }
        },
        fill: {
            opacity: 1,
            colors: ['#4318FF'], // Color of the bars
        },
    };

    return (
        <ContainerCard styling="w-full flex flex-col gap-1 !pb-0 !pt-[2.5%]">
            <div className="flex flex-col h-full gap-1 pl-[1.5%]">
                <StyledH4Heading font="text-light-blue-gradient !leading-tight">Data by Region</StyledH4Heading>
                <StyledMdText font="text-dark-gray !leading-tight">Your data interests based on country/region</StyledMdText>
            </div>
            <div id="chart">
                <ReactApexChart options={options} series={series} type="bar" height={260} />
            </div>
        </ContainerCard>
    );
};

export default ApexChart;
