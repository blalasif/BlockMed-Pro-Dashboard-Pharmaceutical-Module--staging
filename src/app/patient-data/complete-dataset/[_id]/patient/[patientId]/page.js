"use client"

import React, { useState } from 'react'
import StyledH4Heading from '@/common/components/styledH4Heading/StyledH4Heading'
import StyledH5Heading from '@/common/components/styledH5Heading/StyledH5Heading'
import BackActionButton from '@/components/backActionButton/BackActionButton'
import SimpleLayout from '@/layout/SimpleLayout/SimpleLayout'
import { useParams } from 'next/navigation'
import ContainerCard from '@/components/containerCard/ContainerCard'
import BasicAreaChart from '@/components/charts/components/basicAreaChartComponent/BasicAreaChartComponent'
import InputSelect from '@/components/inputSelect/InputSelect'
import DetailsTable from '@/components/detailsTable/DetailsTable'
import ColumnChartComponent from '@/components/charts/components/columnChartComponent/ColumnChartComponent'
import StyledMdText from '@/common/components/styledMdText/StyledMdText'
import AreaChartComponent from '@/components/charts/components/areaChartComponent/AreaChartComponent'

const basicAreaChartData = {
  yAxis: {
    2021: [20, 68, 54, 90, 12, 43, 33, 23, 66, 66, 58, 51],
    2022: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58, 51],
    2023: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58, 51],
    2024: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58, 51]
  },
  xAxis: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  colors: ['#4050E7', '#E3DDF7']
};

const bmiChartData = {
  yAxis: {
    2021: [20, 68, 54, 90, 12, 43, 33, 23, 66, 66, 58, 51],
    2022: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58, 51],
    2023: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58, 51],
    2024: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58, 51]
  },
  xAxis: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  colors: ['#4050E7', '#E3DDF7']
};

const bpChartData = {
  yAxis: {
    2021: [
      {
        name: 'Male',
        data: [1, 40, 28, 51, 42, 9, 100, 42, 109, 100],
      },
      {
        name: 'Female',
        data: [11, 32, 45, 32, 34, 52, 41, 32, 79, 10],
      },
    ],
    2022: [
      {
        name: 'Male',
        data: [31, 40, 28, 51, 42, 109, 100, 42, 109, 100],
      },
      {
        name: 'Female',
        data: [11, 32, 45, 32, 34, 52, 41, 32, 79, 10],
      },
    ],
    2023: [
      {
        name: 'Male',
        data: [31, 40, 28, 51, 42, 109, 100, 42, 109, 100],
      },
      {
        name: 'Female',
        data: [11, 32, 45, 32, 34, 52, 41, 32, 79, 10],
      },
    ],
    2024: [
      {
        name: 'Male',
        data: [31, 40, 28, 51, 42, 109, 100, 42, 109, 100],
      },
      {
        name: 'Female',
        data: [11, 32, 45, 32, 34, 52, 41, 32, 79, 10],
      },
    ],
  },
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

// Extracting keys from basicAreaChartData.prices as options
const basicAreaChartOptions = Object.keys(basicAreaChartData.yAxis).map(key => ({ value: key }));

// Extracting keys from bmiChartData.prices as options
const bmiChartOptions = Object.keys(bmiChartData.yAxis).map(key => ({ value: key }));

// Extracting keys from bpChartData.prices as options
const bpChartOptions = Object.keys(bpChartData.yAxis).map(key => ({ value: key }));


//Table Data
const bmiInfoData = {
  tableRows: [
    { _id: 1, bmi: '98 Kg', weight: '21 May 2024', reportedBy: 'Clinic' },
    { _id: 2, bmi: '85 Kg', weight: '7 Feb 2024', reportedBy: 'Clinic' },
    { _id: 3, bmi: '82 Kg', weight: '14 Dec 2023', reportedBy: 'Self Reported' },
  ],
  columnsData: [
    { label: 'BMI', key: 'bmi' },
    { label: 'Weight', key: 'weight' },
    { label: 'Reported by', key: 'reportedBy' },
  ]
}

const weightInfoData = {
  tableRows: [
    { _id: 1, weight: '98 Kg', date: '21 May 2024', reportedBy: 'Clinic' },
    { _id: 2, weight: '85 Kg', date: '7 Feb 2024', reportedBy: 'Clinic' },
    { _id: 3, weight: '82 Kg', date: '14 Dec 2023', reportedBy: 'Self Reported' },
  ],
  columnsData: [
    { label: 'Weight', key: 'weight' },
    { label: 'Date', key: 'date' },
    { label: 'Reported by', key: 'reportedBy' },
  ]
}

const healthBeingData = {
  health: {
    tableRows: [
      { _id: 1, overallHealth: '98 Kg', sleepHours: '21 May 2024', improvingSleep: 'Clinic' },
    ],
    columnsData: [
      { label: 'Overall Health', key: 'overallHealth' },
      { label: 'Sleep Hours', key: 'sleepHours' },
      { label: 'Improving Sleep', key: 'improvingSleep' },
    ]
  },
  exercise: {
    tableRows: [
      { _id: 1, exercise: '98 Kg', howOften: '21 May 2024', typeOfExercise: 'Clinic' },
    ],
    columnsData: [
      { label: 'Exercise', key: 'exercise' },
      { label: 'How Often', key: 'howOften' },
      { label: 'Type of Exercise', key: 'typeOfExercise' },
    ]
  }
}

const dietData = {
  food: {
    tableRows: [
      { _id: 1, servingOfFruits: '98 Kg', eatOrTakeout: '21 May 2024' },
    ],
    columnsData: [
      { label: 'Serving of fruits and vegetables (Daily)', key: 'servingOfFruits' },
      { label: 'Eat fast food or takeout', key: 'eatOrTakeout' },
    ]
  },
  water: {
    tableRows: [
      { _id: 1, waterPerDay: '98 Kg', wantHelpToLoseWeight: '21 May 2024' },
    ],
    columnsData: [
      { label: 'Drinks 2 liter water a day', key: 'waterPerDay' },
      { label: 'Like help to lose weight', key: 'wantHelpToLoseWeight' },
    ]
  }
}

const workLifeBalanceData = {
  food: {
    tableRows: [
      { _id: 1, servingOfFruits: '98 Kg', eatOrTakeout: '21 May 2024' },
    ],
    columnsData: [
      { label: 'Serving of fruits and vegetables (Daily)', key: 'servingOfFruits' },
      { label: 'Eat fast food or takeout', key: 'eatOrTakeout' },
    ]
  },
  water: {
    tableRows: [
      { _id: 1, waterPerDay: '98 Kg', wantHelpToLoseWeight: '21 May 2024' },
    ],
    columnsData: [
      { label: 'Drinks 2 liter water a day', key: 'waterPerDay' },
      { label: 'Like help to lose weight', key: 'wantHelpToLoseWeight' },
    ]
  }
}

const Page = () => {

  const params = useParams()

  const [selectedDateForWeight, setSelectedDateForWeight] = useState(2024)
  const [selectedDateForBmi, setSelectedDateForBmi] = useState(2024)
  const [selectedDateForBp, setSelectedDateForBp] = useState(2024)
  const [loading, setLoading] = useState(false)

  return (
    <SimpleLayout>
      <div className="w-[90%] xl:w-[80%] flex flex-col gap-10">
        <div className="flex flex-col gap-5 xl:gap-0">
          <div>
            <BackActionButton fontColor="text-light-blue-gradient" />
          </div>
          <div className="text-center">
            <StyledH5Heading font="text-dark-gray font-semibold">Patient ID. #{params?.patientId}</StyledH5Heading>
          </div>
        </div>

        {/* Weight Info */}
        <div className="flex flex-col w-full gap-5">
          {/* Heading */}
          <div>
            <StyledH4Heading font="text-black">Weight info</StyledH4Heading>
          </div>

          {/* Graph */}
          <ContainerCard styling="w-full flex flex-col gap-3">
            <div className="flex items-center justify-between w-full px-[5%]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: basicAreaChartData.colors[0] }}></div>
                <StyledMdText font="font-semibold text-dark-gray">Weight</StyledMdText>
              </div>
              <div className="flex items-center gap-2">
                <InputSelect selectedOption={selectedDateForWeight} setSelectedOption={setSelectedDateForWeight} options={basicAreaChartOptions} />
              </div>
            </div>
            <div>
              <BasicAreaChart selectedOption={selectedDateForWeight} data={basicAreaChartData} />
            </div>
          </ContainerCard>

          {/* Details Table */}
          <div className="w-full">
            <DetailsTable
              loading={loading}
              tableRows={weightInfoData.tableRows}
              columnsData={weightInfoData.columnsData}
              TableBodyRow={({ weight, date, reportedBy }) => (
                <tr>
                  <td className="px-4 py-8 text-center border-2 text-md font-inter border-light-gray">{weight}</td>
                  <td className="px-4 py-8 text-center border-2 text-md font-inter border-light-gray">{date}</td>
                  <td className="px-4 py-8 text-center border-2 text-md font-inter border-light-gray">{reportedBy}</td>
                </tr>
              )}
            />
          </div>
        </div>
        <hr className="text-light-gray" />

        {/* BMI */}
        <div className="flex flex-col w-full gap-5">
          {/* Heading */}
          <div>
            <StyledH4Heading font="text-black">BMI (Body Mass Index)</StyledH4Heading>
          </div>

          {/* Graph */}
          <ContainerCard styling="w-full flex flex-col gap-3">
            <div className="flex items-center justify-between w-full px-[5%]">
              <div className="flex items-center gap-2">
                <StyledMdText font="font-semibold text-dark-gray">BMI (Body Mass  Index)</StyledMdText>
              </div>
              <div className="flex items-center gap-2">
                <InputSelect selectedOption={selectedDateForBmi} setSelectedOption={setSelectedDateForBmi} options={bmiChartOptions} />
              </div>
            </div>
            <div>
              <ColumnChartComponent height={400} selectedOption={selectedDateForBmi} data={bmiChartData} />
            </div>
          </ContainerCard>

          {/* Details Table */}
          <div className="w-full">
            <DetailsTable
              loading={loading}
              tableRows={bmiInfoData.tableRows}
              columnsData={bmiInfoData.columnsData}
              TableBodyRow={({ weight, bmi, reportedBy }) => (
                <tr>
                  <td className="px-4 py-8 text-center border-2 text-md font-inter border-light-gray">{bmi}</td>
                  <td className="px-4 py-8 text-center border-2 text-md font-inter border-light-gray">{weight}</td>
                  <td className="px-4 py-8 text-center border-2 text-md font-inter border-light-gray">{reportedBy}</td>
                </tr>
              )}
            />
          </div>
        </div>
        <hr className="text-light-gray" />

        {/* Blood Pressure */}
        <div className="flex flex-col w-full gap-5">
          {/* Heading */}
          <div>
            <StyledH4Heading font="text-black">Blood Pressure</StyledH4Heading>
          </div>

          {/* Graph */}
          <ContainerCard styling="w-full flex flex-col gap-3">
            <div className="flex items-center justify-between w-full px-[5%]">
              <div className="flex items-center gap-2">
                <StyledMdText font="font-semibold text-dark-gray">Blood Pressure</StyledMdText>
              </div>
              <div className="flex items-center gap-2">
                <InputSelect selectedOption={selectedDateForBp} setSelectedOption={setSelectedDateForBp} options={bpChartOptions} />
              </div>
            </div>
            <div>
              <AreaChartComponent selectedOption={selectedDateForBp} data={bpChartData} />
            </div>
          </ContainerCard>
        </div>
        <hr className="text-light-gray" />

        {/* General Health And Well-Being Table */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <StyledH4Heading font="text-black">General Health And Well-Being</StyledH4Heading>
          </div>
          <div className="w-full">
            <DetailsTable
              loading={loading}
              tableRows={healthBeingData.health.tableRows}
              columnsData={healthBeingData.health.columnsData}
              TableBodyRow={({ improvingSleep, sleepHours, overallHealth }) => (
                <tr>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{overallHealth}</td>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{sleepHours}</td>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{improvingSleep}</td>
                </tr>
              )}
            />
          </div>
          <div className="w-full">
            <DetailsTable
              loading={loading}
              tableRows={healthBeingData.exercise.tableRows}
              columnsData={healthBeingData.exercise.columnsData}
              TableBodyRow={({ exercise, howOften, typeOfExercise }) => (
                <tr>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{exercise}</td>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{howOften}</td>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{typeOfExercise}</td>
                </tr>
              )}
            />
          </div>
        </div>
        <hr className="text-light-gray" />

        {/* Diet Table */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <StyledH4Heading font="text-black">Diet</StyledH4Heading>
          </div>
          <div className="w-full">
            <DetailsTable
              loading={loading}
              tableRows={dietData.food.tableRows}
              columnsData={dietData.food.columnsData}
              TableBodyRow={({ servingOfFruits, eatOrTakeout }) => (
                <tr>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{servingOfFruits}</td>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{eatOrTakeout}</td>
                </tr>
              )}
            />
          </div>
          <div className="w-full">
            <DetailsTable
              loading={loading}
              tableRows={dietData.water.tableRows}
              columnsData={dietData.water.columnsData}
              TableBodyRow={({ wantHelpToLoseWeight, waterPerDay }) => (
                <tr>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{waterPerDay}</td>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{wantHelpToLoseWeight}</td>
                </tr>
              )}
            />
          </div>
        </div>
        <hr className="text-light-gray" />

        {/* Work life balance Table */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <StyledH4Heading font="text-black">Work Life Balance</StyledH4Heading>
          </div>
          <div className="w-full">
            <DetailsTable
              loading={loading}
              tableRows={workLifeBalanceData.food.tableRows}
              columnsData={workLifeBalanceData.food.columnsData}
              TableBodyRow={({ servingOfFruits, eatOrTakeout }) => (
                <tr>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{servingOfFruits}</td>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{eatOrTakeout}</td>
                </tr>
              )}
            />
          </div>
          <div className="w-full">
            <DetailsTable
              loading={loading}
              tableRows={workLifeBalanceData.water.tableRows}
              columnsData={workLifeBalanceData.water.columnsData}
              TableBodyRow={({ wantHelpToLoseWeight, waterPerDay }) => (
                <tr>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{waterPerDay}</td>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{wantHelpToLoseWeight}</td>
                </tr>
              )}
            />
          </div>
        </div>
        <hr className="text-light-gray" />

        {/* Social connections Table */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <StyledH4Heading font="text-black">Social Connections</StyledH4Heading>
          </div>
          <div className="w-full">
            <DetailsTable
              loading={loading}
              tableRows={workLifeBalanceData.food.tableRows}
              columnsData={workLifeBalanceData.food.columnsData}
              TableBodyRow={({ servingOfFruits, eatOrTakeout }) => (
                <tr>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{servingOfFruits}</td>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{eatOrTakeout}</td>
                </tr>
              )}
            />
          </div>
          <div className="w-full">
            <DetailsTable
              loading={loading}
              tableRows={workLifeBalanceData.water.tableRows}
              columnsData={workLifeBalanceData.water.columnsData}
              TableBodyRow={({ wantHelpToLoseWeight, waterPerDay }) => (
                <tr>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{waterPerDay}</td>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{wantHelpToLoseWeight}</td>
                </tr>
              )}
            />
          </div>
          <div className="w-full">
            <DetailsTable
              loading={loading}
              tableRows={workLifeBalanceData.water.tableRows}
              columnsData={workLifeBalanceData.water.columnsData}
              TableBodyRow={({ wantHelpToLoseWeight, waterPerDay }) => (
                <tr>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{waterPerDay}</td>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{wantHelpToLoseWeight}</td>
                </tr>
              )}
            />
          </div>
        </div>
        <hr className="text-light-gray" />

        {/* Health problems Table */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <StyledH4Heading font="text-black">Health Problems <span className="text-lg">(Self Reported)</span></StyledH4Heading>
          </div>
          <div className="w-full">
            <DetailsTable
              loading={loading}
              tableRows={workLifeBalanceData.food.tableRows}
              columnsData={workLifeBalanceData.food.columnsData}
              TableBodyRow={({ servingOfFruits, eatOrTakeout }) => (
                <tr>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{servingOfFruits}</td>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{eatOrTakeout}</td>
                </tr>
              )}
            />
          </div>
        </div>
        <hr className="text-light-gray" />

        {/* Family Problems Table */}
        <div className="flex flex-col gap-5 pb-10">
          <div className="flex items-center gap-2">
            <StyledH4Heading font="text-black">Family Problems <span className="text-lg">(Self Reported)</span></StyledH4Heading>
          </div>
          <div className="w-full">
            <DetailsTable
              loading={loading}
              tableRows={workLifeBalanceData.food.tableRows}
              columnsData={workLifeBalanceData.food.columnsData}
              TableBodyRow={({ servingOfFruits, eatOrTakeout }) => (
                <tr>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{servingOfFruits}</td>
                  <td className="px-4 text-center border-2 py-7 text-md font-inter border-light-gray">{eatOrTakeout}</td>
                </tr>
              )}
            />
          </div>
        </div>
      </div>
    </SimpleLayout >
  )
}

export default Page
