import DashboardLayout from "@/layout/DashboardLayout/DashboardLayout"
import GeneralStats from "@/sections/Dashboard/GeneralStats/GeneralStats"
import WelcomeSection from "@/sections/Dashboard/WelcomeSection/WelcomeSection"

const Page = () => {
    return (
        <DashboardLayout>
            <div className="relative flex flex-col items-center w-full gap-6 xl:gap-10">
                <div className="relative w-[95%] xl:w-full h-full">
                    <WelcomeSection />
                </div>
                <div className="relative w-[95%] xl:w-full">
                    <GeneralStats />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Page
