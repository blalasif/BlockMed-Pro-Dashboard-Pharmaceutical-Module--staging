import StyledH3Heading from "@/common/components/styledH3Heading/StyledH3Heading"
import StyledLgText from "@/common/components/styledLgText/StyledLgText"
import PieChart from "@/components/charts/pieChart/PieChart"
import StatsCard from "@/components/statsCard/StatsCard"

const PatientDataSection = () => {

    const statsData = [
        {
            title: "Total Downloads",
            value: "1937",
            svg: "/assets/icons/patientData-downloads.svg"
        },
        {
            title: "Total Expense",
            value: "$3.25m",
            svg: "/assets/icons/patientData-totalExpense.svg"
        },
        {
            title: "Complete Dataset Downloads",
            value: "301.4m",
            svg: "/assets/icons/stats-dataset.svg"
        },
        {
            title: "Non-Clinical Data Downloads",
            value: "46.9m",
            svg: "/assets/icons/stats-clinicalData.svg"
        },
    ]

    return (
        <div className="flex flex-col w-full">
            <div className="relative flex flex-col w-full gap-4 xl:gap-8">
                <div className="flex flex-col">
                    <div>
                        <StyledH3Heading font="text-light-blue-gradient leading-tight">Patient Data</StyledH3Heading>
                    </div>
                    <div>
                        <StyledLgText font="text-dark-gray">List of all acquired data. Click the view button for more details.</StyledLgText>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-full gap-3 xl:gap-5 xl:flex-row">
                    <div className="grid xl:w-[55%] grid-cols-1 xl:grid-cols-2 gap-3 xl:gap-5">
                        {
                            statsData?.map((item, index) => (
                                <div key={index} className="col-span-1">
                                    <StatsCard size={63} styling="h-[85%]" statsData={item} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="xl:w-[45%]">
                        <PieChart width={280} flow="horizontal" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PatientDataSection
