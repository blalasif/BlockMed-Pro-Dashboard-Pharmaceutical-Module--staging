import React from 'react'
import StyledH3Heading from "@/common/components/styledH3Heading/StyledH3Heading"
import StyledLgText from "@/common/components/styledLgText/StyledLgText"
import StatsCard from "@/components/statsCard/StatsCard"
import BackGradientButton from '@/components/backGradientButton/BackGradientButton'
import ContainerCard from '@/components/containerCard/ContainerCard'
import StyledMdText from '@/common/components/styledMdText/StyledMdText'
import StyledSmText from '@/common/components/styledSmText/StyledSmText'
import PieChartComponent from '@/components/charts/components/pieChartComponent/PieChartComponent'
import ColumnChartComponent from '@/components/charts/components/columnChartComponent/ColumnChartComponent'
import HorizontalBarChartComponent from '@/components/charts/components/horizontalBarChartComponent/HorizontalBarChartComponent'
import DonutChartComponent from '@/components/charts/components/donutChartComponent/DonutChartComponent'
import StyledH4Heading from '@/common/components/styledH4Heading/StyledH4Heading'
import AreaChartComponent from '@/components/charts/components/areaChartComponent/AreaChartComponent'

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

//Donut chart data
const donutChartData = {
  series: [44, 55, 41, 17, 15, 44, 55, 41],
  labels: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
  colors: ["#CD2222", "#AD00FF", "#0D2A52", "#00BC00", "#BA006D", "#02A1E0", "#E37C3A", "#ECAE41"]
};

const totalSum = donutChartData.series.reduce((acc, curr) => acc + curr, 0);

//Clinical Diseases chart data
const clinicalDiseasesChartData = {
  series: [17, 9, 13, 7, 12, 6, 10, 4, 8, 2, 11, 1],
  labels: ["Myocardial", "Connective Tissue", "Heart Failure", "Peptic Ulcer", "Peripheral Vascular", "Diabetes", "Cerebrovascular", "Liver Disease", "Dementia", "Osteoporosis", "COPD", "Asthma"],
  colors: ["#CD2222", "#AD00FF", "#0D2A52", "#00BC00", "#BA006D", "#02A1E0", "#E37C3A", "#ECAE41", "#BA006D", "#02A1E0", "#E37C3A", "#ECAE41"]
};

const columnChartData = {
  yAxis: [40, 80, 78, 90, 40],
  xAxis: ["<18.5", "18.5 to 24.9", "25 to 29.9", "30 to 39.9", "40>"]
}

const totalSumOfClinicDiseases = clinicalDiseasesChartData.series.reduce((acc, curr) => acc + curr, 0);

const areaChartData = {
  yAxis:
    [
      {
        name: 'Male',
        data: [31, 40, 28, 51, 42, 109, 100, 42, 109, 100],
      },
      {
        name: 'Female',
        data: [11, 32, 45, 32, 34, 52, 41, 32, 79, 10],
      },
    ],
  xAxis: [
    '12-18',
    '19-25',
    '26-32',
    '33-39',
    '40-46',
    '47-53',
    '54-60',
    '61-67',
    '68-74',
    '80>'
  ]
}

const DataSection = () => {

  return (
    <div className="flex flex-col w-full">
      <div className="relative flex flex-col w-full gap-5">
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
          <div className="flex flex-col xl:w-[55%] gap-3 xl:gap-5">
            <div className="flex flex-col justify-between w-full gap-3 xl:gap-5 xl:flex-row">
              {/* Data Cards */}
              <div className="xl:w-[50%] gap-3 xl:gap-5 flex flex-col">
                {
                  statsData?.map((item, index) => (
                    <div key={index}>
                      <StatsCard size={53} styling="h-full gap-[17px]" statsData={item} />
                    </div>
                  ))
                }
              </div>
              <div className="xl:w-[50%]">
                <ContainerCard styling="w-full flex items-center flex-col gap-2 px-4 pt-3 pb-0">
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
            {/* Age Chart */}
            <div className="w-full">
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
          <div className="flex flex-col xl:w-[45%] gap-3 xl:gap-5">
            {/* BMI chart */}
            <div className="flex items-center justify-between w-full gap-3">
              <ContainerCard styling="w-full flex items-center flex-col gap-2 pb-0 pr-0">
                <div className="flex items-center justify-start w-full gap-3 pl-1.5">
                  <StyledMdText font="font-semibold text-dark-gray">BMI (Body Mass Index)</StyledMdText>
                </div>
                <div className="w-full">
                  <ColumnChartComponent data={columnChartData} height={230} />
                </div>
              </ContainerCard>
            </div>
            {/* Blood group chart */}
            <div className="flex items-center justify-between w-full gap-3">
              <ContainerCard styling="w-full flex items-center flex-col gap-2">
                <div className="flex items-center justify-start w-full gap-3 pl-1.5">
                  <StyledMdText font="font-semibold text-dark-gray">Blood Group</StyledMdText>
                </div>
                <div className="relative flex justify-center w-full">
                  <DonutChartComponent series={donutChartData?.series} labels={donutChartData?.labels} colors={donutChartData?.colors} />
                  <div className="absolute top-[30%] xl:w-full left-[37.5%] xl:left-[1%] items-center flex flex-col gap-2">
                    <StyledMdText font="font-normal text-dark-gray">Total patients</StyledMdText>
                    <StyledH4Heading font="!font-bold text-black">{totalSum}</StyledH4Heading>
                    <div className="flex flex-col items-center">
                      <StyledSmText font="font-normal text-dark-gray">Male {(totalSum * (2 / 3)).toFixed(0)}</StyledSmText>
                      <StyledSmText font="font-normal text-dark-gray">Female {(totalSum * (1 / 3)).toFixed(0)}</StyledSmText>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <hr className="w-full text-dark-gray" />
                </div>
                <div className="grid w-full grid-cols-4">
                  {donutChartData.labels.map((label, index) => (
                    <div key={index} className="col-span-1 place-content-center flex items-center my-[0.5rem] mx-0" >
                      <div style={{ width: '12px', height: '12px', backgroundColor: donutChartData.colors[index], borderRadius: '50%', marginRight: '8px' }}></div>
                      <StyledMdText font="text-black mr-[4px] font-normal">{label}</StyledMdText>
                    </div>
                  ))}
                </div>
              </ContainerCard>
            </div>
          </div>
        </div>
        {/* Area Chart */}
        <div className="flex items-center justify-between w-full gap-3">
          <ContainerCard styling="w-full flex items-center flex-col gap-2">
            <div className="px-1.5 flex items-center justify-between w-full gap-3">
              <div>
                <StyledMdText font="font-semibold text-dark-gray">Blood Pressure</StyledMdText>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colorsAge[1] }}></div>
                  <StyledSmText font="font-normal text-dark-gray">Systolic</StyledSmText>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colorsAge[0] }}></div>
                  <StyledSmText font="font-normal text-dark-gray">Diastolic</StyledSmText>
                </div>
              </div>
            </div>
            <div className="relative w-full">
              <AreaChartComponent data={areaChartData} />
            </div>
          </ContainerCard>
        </div>
        {/* Clinical Diseases Chart */}
        <div className="flex items-center justify-between w-full gap-3">
          <ContainerCard styling="w-full flex xl:flex-row flex-col h-full items-center gap-2">
            <div className="px-1.5 flex flex-col w-full xl:w-[60%] gap-5">
              <div>
                <StyledMdText font="font-semibold text-dark-gray">Clinical Diseases</StyledMdText>
              </div>
              <div>
                <hr className="text-dark-gray xl:w-[50%]" />
              </div>
              <div className="grid w-full grid-cols-1 pt-1 pb-5 xl:grid-cols-2">
                {clinicalDiseasesChartData?.labels?.map((label, index) => (
                  <div key={index} className="col-span-1 place-content-center xl:w-[80%] flex justify-between gap-5 items-center my-[0.5rem] mx-0" >
                    <div className="flex items-center gap-1">
                      <div style={{ width: '12px', height: '12px', backgroundColor: clinicalDiseasesChartData.colors[index], borderRadius: '50%', marginRight: '8px' }}></div>
                      <StyledMdText font="text-dark-blue mr-[4px] font-normal">{label}</StyledMdText>
                    </div>
                    <div>
                      <StyledMdText font="text-dark-gray mr-[4px] font-normal">{clinicalDiseasesChartData.series[index]}%</StyledMdText>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative xl:w-[40%]">
              <DonutChartComponent series={clinicalDiseasesChartData?.series} labels={clinicalDiseasesChartData?.labels} colors={clinicalDiseasesChartData?.colors} />
              <div className="absolute top-[34%] left-[37.5%] xl:left-[41%] items-center flex flex-col gap-0">
                <StyledH3Heading font="!font-bold text-black">{totalSumOfClinicDiseases}</StyledH3Heading>
                <StyledMdText font="font-normal text-dark-gray">Downloads</StyledMdText>
              </div>
            </div>
          </ContainerCard>
        </div>
      </div>
    </div>
  )
}

export default DataSection
