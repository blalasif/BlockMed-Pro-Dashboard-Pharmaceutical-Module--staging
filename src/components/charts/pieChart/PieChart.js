"use client";

import React from 'react';
import ContainerCard from '@/components/containerCard/ContainerCard';
import StyledMdText from '@/common/components/styledMdText/StyledMdText';
import StyledH4Heading from '@/common/components/styledH4Heading/StyledH4Heading';
import PieChartComponent from '../components/pieChartComponent/PieChartComponent';

const PieChart = ({ flow, width }) => {
    const series = [63, 37];
    const labels = ['Complete Dataset', 'Non Clinical Data'];
    const colors = ['#4318FF', '#6AD2FF'];

    return (
        <ContainerCard styling={`flex ${flow === "vertical" ? "flex-col" : "flex-row"} w-full gap-4 items-center ${flow === "vertical" ? "!px-4 !py-8" : "!px-4 !pt-6 !pb-6 xl:!pb-0"}`}>
            <div className={`flex flex-col items-center ${flow === "vertical" ? "w-full" : "w-[50%]"} ${flow === "vertical" ? "gap-4" : "gap-2"}`}>
                <div>
                    <StyledH4Heading font="text-light-blue-gradient text-center">
                        Purchased Data
                    </StyledH4Heading>
                </div>
                <div id="chart" className={`${flow === "vertical" ? "xl:min-h-[233px]" : "xl:min-h-[210px]"} xl:min-w-[${width}]`}>
                    <PieChartComponent colors={colors} labels={labels} series={series} type="pie" width={width} />
                </div>
            </div>
            <div className={`${flow === "vertical" ? "xl:w-[70%]" : "xl:w-[50%]"}`}>
                <ContainerCard styling={`flex ${flow === "vertical" ? "flex-row gap-3 justify-between" : "flex-col gap-5"} items-center`}>
                    {labels?.map((label, index) => (
                        <>
                            <div key={index} className="flex justify-between w-full">
                                <div className="flex items-start justify-center w-full gap-4">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[index] }}></div>
                                    <div className="flex flex-col gap-2">
                                        <StyledMdText font="text-dark-gray leading-none">{label}</StyledMdText>
                                        <StyledH4Heading font="text-dark-blue leading-none">{series[index]}%</StyledH4Heading>
                                    </div>
                                </div>
                            </div>
                            {index < labels.length - 1 && (
                                <div
                                    className={`${flow === "vertical" ? "w-[1px] h-[4rem]" : "w-full xl:w-[80%] h-[1px]"}`}
                                    style={{
                                        border: '1px solid #EDEDED',
                                        margin: '4px 0'
                                    }}
                                />
                            )}
                        </>
                    ))}
                </ContainerCard>
            </div>
        </ContainerCard>
    );
};

export default PieChart;
