"use client"

import React from 'react'
import StyledH3Heading from '@/common/components/styledH3Heading/StyledH3Heading'
import StyledH4Heading from '@/common/components/styledH4Heading/StyledH4Heading'
import StyledLgText from '@/common/components/styledLgText/StyledLgText'
import Button from '@/components/button/Button'
import DataTable from '@/components/dataTable/DataTable'
import DashboardLayout from '@/layout/DashboardLayout/DashboardLayout'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { togglePaymentPlanModal } from '@/redux/appSlice/AppSlice'

const ColumnsData = [
  { id: 'patientId', label: 'Patient ID' },
  { id: 'age', label: 'Age' },
  { id: 'sexAtBirth', label: 'Sex at Birth' },
  { id: 'location', label: 'Location' },
  { id: 'bloodGroup', label: 'Blood Group' },
  { id: 'diseases', label: 'Diseases' },
  { id: 'bmi', label: 'BMI' },
  { id: 'ethnicity', label: 'Ethnicity' },
];

const bankDetails = [
  { patientId: 1, age: 1, sexAtBirth: 'Male', location: '14:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 2, age: 2, sexAtBirth: 'Male', location: '15:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 3, age: 3, sexAtBirth: 'Male', location: '16:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 4, age: 4, sexAtBirth: 'Male', location: '17:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 5, age: 5, sexAtBirth: 'Male', location: '18:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 6, age: 6, sexAtBirth: 'Male', location: '19:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 7, age: 7, sexAtBirth: 'Male', location: '20:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 8, age: 8, sexAtBirth: 'Male', location: '21:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 9, age: 9, sexAtBirth: 'Male', location: '22:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 10, age: 10, sexAtBirth: 'Male', location: '23:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 11, age: 11, sexAtBirth: 'Male', location: '10:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 12, age: 12, sexAtBirth: 'Male', location: '11:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 13, age: 13, sexAtBirth: 'Male', location: '12:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 14, age: 14, sexAtBirth: 'Male', location: '13:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 15, age: 15, sexAtBirth: 'Male', location: '14:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 16, age: 16, sexAtBirth: 'Male', location: '15:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 17, age: 17, sexAtBirth: 'Male', location: '16:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 18, age: 18, sexAtBirth: 'Male', location: '17:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 19, age: 19, sexAtBirth: 'Male', location: '18:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 20, age: 20, sexAtBirth: 'Male', location: '19:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 21, age: 21, sexAtBirth: 'Male', location: '20:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 22, age: 22, sexAtBirth: 'Male', location: '21:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 23, age: 23, sexAtBirth: 'Male', location: '22:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 24, age: 24, sexAtBirth: 'Male', location: '23:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 25, age: 25, sexAtBirth: 'Male', location: '10:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 26, age: 26, sexAtBirth: 'Male', location: '11:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 27, age: 27, sexAtBirth: 'Male', location: '12:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 28, age: 28, sexAtBirth: 'Male', location: '13:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 29, age: 29, sexAtBirth: 'Male', location: '14:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 30, age: 30, sexAtBirth: 'Male', location: '15:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 31, age: 31, sexAtBirth: 'Male', location: '16:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 32, age: 32, sexAtBirth: 'Male', location: '17:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 33, age: 33, sexAtBirth: 'Male', location: '18:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 34, age: 34, sexAtBirth: 'Male', location: '19:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 35, age: 35, sexAtBirth: 'Male', location: '20:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 36, age: 36, sexAtBirth: 'Male', location: '21:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 37, age: 37, sexAtBirth: 'Male', location: '22:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 38, age: 38, sexAtBirth: 'Male', location: '23:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 39, age: 39, sexAtBirth: 'Male', location: '10:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 40, age: 40, sexAtBirth: 'Male', location: '11:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 41, age: 41, sexAtBirth: 'Male', location: '12:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 42, age: 42, sexAtBirth: 'Male', location: '13:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 43, age: 43, sexAtBirth: 'Male', location: '14:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 44, age: 44, sexAtBirth: 'Male', location: '15:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 45, age: 45, sexAtBirth: 'Male', location: '16:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 46, age: 46, sexAtBirth: 'Male', location: '17:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 47, age: 47, sexAtBirth: 'Male', location: '18:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 48, age: 48, sexAtBirth: 'Male', location: '19:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 49, age: 49, sexAtBirth: 'Male', location: '20:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' },
  { patientId: 50, age: 50, sexAtBirth: 'Male', location: '21:00', bloodGroup: 'A+', ethnicity: 'Pakistani', diseases: 'Maleria', bmi: '7.5' }
];

const Page = () => {

  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(togglePaymentPlanModal(true));
  };

  return (
    <DashboardLayout>
      <div className="flex justify-center w-full">
      <div className="flex flex-col w-[95%] xl:w-full gap-4 xl:gap-6">
        <div className="flex flex-col items-center justify-between w-full gap-3 xl:gap-0 xl:flex-row">
          <div className="flex flex-col">
            <div>
              <StyledH3Heading font="text-light-blue-gradient leading-tight">Search Results</StyledH3Heading>
            </div>
            <div>
              <StyledLgText font="text-dark-gray">You results based on your applied filter. Pay and get access to all data.</StyledLgText>
            </div>
          </div>
          <Link href="/search-user-database" className="xl:w-[15%] h-[75%]">
            <Button font="text-white font-semibold text-md flex items-center justify-center gap-3 px-2 xl:px-0 !py-1.5" variant="bg-light-blue-gradient">
              <Icon icon="wpf:previous" width="34" height="34" />Show Filters
            </Button>
          </Link>
        </div>
        <div className="w-full rounded-[12px] relative shadow-lg">
          <DataTable
            ColumnsData={ColumnsData}
            tableRows={bankDetails?.slice(0, 6)}
            applyPadding
            isSearchResult
            loading={false}
            TableBodyRow={({ patientId, age, sexAtBirth, location, bloodGroup, diseases, bmi, ethnicity }) => (
              <tr className="border-b">
                <td className="px-4 text-lg text-center py-7 font-inter">{patientId}</td>
                <td className="px-4 text-lg text-center py-7 font-inter">{age}</td>
                <td className="px-4 text-lg text-center py-7 font-inter">{sexAtBirth}</td>
                <td className="px-4 text-lg text-center py-7 font-inter">{location}</td>
                <td className="px-4 text-lg text-center py-7 font-inter">{bloodGroup}</td>
                <td className="px-4 text-lg text-center py-7 font-inter">{diseases}</td>
                <td className="px-4 text-lg text-center py-7 font-inter">{bmi}</td>
                <td className="px-4 text-lg text-center py-7 font-inter">{ethnicity}</td>
              </tr>
            )}
          />
          <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-white/0 to-white/0 backdrop-blur-md">
            <div className="h-full bg-gradient-to-t rounded-lg from-[rgba(255,255,255,1)] via-[rgba(255,255,255,0.5)] to-[rgba(255,255,255,0)] backdrop-blur-xl">
              <div className="flex flex-col items-center pt-[20%] xl:pt-[5%] h-full gap-5">
                <div>
                  <StyledH4Heading font="text-dark-blue text-center">The search parameters entered <br />have generated 1000 results</StyledH4Heading>
                </div>
                <div className='xl:w-[17.5%]'>
                  <Button onClick={handleClose} font="text-white font-normal text-lg px-2 !py-3 rounded-[8px]" variant="bg-light-blue-gradient">Press to Unlock Data</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </DashboardLayout>
  )
}

export default Page