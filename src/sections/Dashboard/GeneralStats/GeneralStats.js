import StyledH3Heading from "@/common/components/styledH3Heading/StyledH3Heading"
import BarChart from "@/components/charts/barChart/BarChart"
import PieChart from "@/components/charts/pieChart/PieChart"
import StatsCard from "@/components/statsCard/StatsCard"
import Image from "next/image"

const GeneralStats = () => {

    const statsData = [
        {
            title: "Total Data",
            value: "3250000",
            svg: "/assets/icons/stats-totalData.svg"
        },
        {
            title: "Complete Dataset",
            value: "36900",
            svg: "/assets/icons/stats-dataset.svg"
        },
        {
            title: "Non Clinical Data",
            value: "46900000",
            svg: "/assets/icons/stats-clinicalData.svg"
        },
    ]

    return (
        <div className="flex flex-col xl:w-[95%] gap-5 xl:gap-10">
            <div className="flex flex-col justify-between w-full gap-3 xl:gap-6 xl:flex-row">
                <div className="relative xl:w-[50%] flex flex-col gap-3 xl:gap-12">
                    <div className="flex flex-col w-full gap-3">
                        <div>
                            <StyledH3Heading font="text-light-blue-gradient leading-tight">General Statistics</StyledH3Heading>
                        </div>
                        <div className="grid w-full grid-cols-1 gap-3 xl:gap-5 xl:grid-cols-2">
                            {
                                statsData?.map((item, index) => (
                                    <div key={index} className="col-span-1">
                                        <StatsCard size={53} styling="h-full gap-3" statsData={item} />
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full">
                        <PieChart width={350} flow="vertical" />
                    </div>
                </div>
                <div className="xl:w-[50%] flex h-full justify-end items-center xl:pt-[5%]">
                    <Image src="/assets/images/stats-video.svg" width={475} height={600} alt="stats-graph" />
                </div>
            </div>
            <div className="w-full">
                <BarChart />
            </div>
        </div>
    )
}
export default GeneralStats
