import AuthLayout from "@/layout/AuthLayout/AuthLayout"
import MainContactPage from "./MainContactPage"

const Page = () => {
    return (
        <AuthLayout>
            <div className="w-[90%] xl:w-[70%] xl:pt-[10%]">
                <MainContactPage />
            </div>
        </AuthLayout>
    )
}

export default Page
