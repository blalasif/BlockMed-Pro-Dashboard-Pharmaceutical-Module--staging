import AuthLayout from "@/layout/AuthLayout/AuthLayout"
import VerifyOtpPage from "./VerifyOtpPage"

const Page = () => {
    return (
        <AuthLayout>
            <div className="w-[90%] xl:w-[70%] flex xl:items-center">
                <VerifyOtpPage />
            </div>
        </AuthLayout>
    )
}

export default Page
