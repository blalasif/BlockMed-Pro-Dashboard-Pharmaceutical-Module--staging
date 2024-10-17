import React from 'react'
import StyledH3Heading from "@/common/components/styledH3Heading/StyledH3Heading"
import StyledLgText from "@/common/components/styledLgText/StyledLgText"
import StatsCard from "@/components/statsCard/StatsCard"
import BackGradientButton from '@/components/backGradientButton/BackGradientButton'
import ContainerCard from '@/components/containerCard/ContainerCard'
import StyledMdText from '@/common/components/styledMdText/StyledMdText'
import StyledSmText from '@/common/components/styledSmText/StyledSmText'
import PieChartComponent from '@/components/charts/components/pieChartComponent/PieChartComponent'
import HorizontalBarChartComponent from '@/components/charts/components/horizontalBarChartComponent/HorizontalBarChartComponent'

const statsData = [
  {
    title: "Total Patients",
    value: "10000",
    svg: "/assets/icons/patientData_totalPatients.svg"
  },
  {
    title: "Expire on",
    value: "13-05-25",
    svg: "/assets/icons/patientData_calendar.svg"
  },
]

const series = [42, 58];
const labels = ['Male', 'Female'];
const colors = ['#4318FF', '#6AD2FF'];
const colorsAge = ["#000000", '#4318FF'];

const DataSection = () => {

  return (
    <div className="flex flex-col w-full">
      <div className="relative flex flex-col w-full gap-3 xl:gap-5">
        {/* Headings */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <div>
              <BackGradientButton />
            </div>
            <div>
              <StyledH3Heading font="text-light-blue-gradient leading-tight">Patients Data</StyledH3Heading>
            </div>
          </div>
          <div>
            <StyledLgText font="text-dark-gray">List of all patients data downloaded on specific data/time.</StyledLgText>
          </div>
        </div>
        <div className="flex flex-col w-full gap-3 xl:gap-5 xl:flex-row">
          <div className="flex flex-col xl:w-[30%] gap-3 xl:gap-5">
            {/* Data Cards */}
            <div className="flex flex-col w-full gap-3 xl:gap-5">
              {
                statsData?.map((item, index) => (
                  <div key={index}>
                    <StatsCard size={53} styling="h-full gap-[17px]" statsData={item} />
                  </div>
                ))
              }
            </div>
            <div className="w-full">
              <ContainerCard styling="w-full flex items-center flex-col gap-2 px-4 py-4">
                <div className="flex items-center justify-center w-full gap-3">
                  <div>
                    <StyledMdText font="font-semibold text-dark-gray">Sex at Birth</StyledMdText>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[0] }}></div>
                    <StyledSmText font="font-normal text-dark-gray">Male</StyledSmText>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[1] }}></div>
                    <StyledSmText font="font-normal text-dark-gray">Female</StyledSmText>
                  </div>
                </div>
                <div>
                  <PieChartComponent colors={colors} labels={labels} series={series} type="pie" width={245} />
                </div>
              </ContainerCard>
            </div>
          </div>
          <div className="xl:w-[70%]">
            {/* Age Chart */}
            <ContainerCard styling="w-full flex items-center flex-col gap-2 px-4 pb-0">
              <div className="pl-1.5 flex items-center justify-between w-full gap-3">
                <div>
                  <StyledMdText font="font-semibold text-dark-gray">Age</StyledMdText>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colorsAge[0] }}></div>
                    <StyledSmText font="font-normal text-dark-gray">Male</StyledSmText>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colorsAge[1] }}></div>
                    <StyledSmText font="font-normal text-dark-gray">Female</StyledSmText>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <HorizontalBarChartComponent colors={colorsAge} labels={labels} />
              </div>
            </ContainerCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataSection
