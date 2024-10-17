import AuthLayout from "@/layout/AuthLayout/AuthLayout"
import ResetPasswordPage from "./ResetPasswordPage"

const Page = () => {
    return (
        <AuthLayout>
            <div className="w-[90%] xl:w-[70%] flex xl:items-center">
                <ResetPasswordPage />
            </div>
        </AuthLayout>
    )
}

export default Page
