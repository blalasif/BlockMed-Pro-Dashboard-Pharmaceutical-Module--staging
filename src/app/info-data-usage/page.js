import AuthLayout from "@/layout/AuthLayout/AuthLayout"
import InfoDataUsagePage from "./InfoDataUsagePage"

const Page = () => {
    return (
        <AuthLayout>
            <div className="w-[90%] xl:w-[70%] xl:pt-[10%]">
                <InfoDataUsagePage />
            </div>
        </AuthLayout>
    )
}

export default Page
