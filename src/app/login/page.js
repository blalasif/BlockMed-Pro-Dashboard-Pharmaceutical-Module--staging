import AuthLayout from "@/layout/AuthLayout/AuthLayout"
import LoginPage from "./LoginPage"

const Page = () => {
    return (
        <AuthLayout>
            <div className="w-[90%] xl:w-[70%] flex xl:items-center">
                <LoginPage />
            </div>
        </AuthLayout>
    )
}

export default Page
