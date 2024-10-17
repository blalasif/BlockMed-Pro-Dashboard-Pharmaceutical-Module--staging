import AuthLayout from "@/layout/AuthLayout/AuthLayout"
import NewPasswordPage from "./NewPasswordPage"

const Page = () => {
    return (
        <AuthLayout>
            <div className="w-[90%] xl:w-[70%] flex xl:items-center">
                <NewPasswordPage />
            </div>
        </AuthLayout>
    )
}

export default Page
