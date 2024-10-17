import React from 'react'
import DashboardLayout from '@/layout/DashboardLayout/DashboardLayout'
import DataSection from '@/sections/PatientData/NonClinicalData/DataSection/DataSection'
import TableSection from '@/sections/PatientData/NonClinicalData/TableSection/TableSection'

const Page = () => {
    return (
        <DashboardLayout>
            <div className="relative flex flex-col items-center w-full xl:w-[92.5%] gap-6">
                <div className="relative w-[95%] xl:w-full h-full">
                    <DataSection />
                </div>
                <div className="w-[95%] xl:w-full pt-2">
                    <hr className="w-full text-light-gray" />
                </div>
                <div className="w-[95%] xl:w-full">
                    <TableSection />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Page
