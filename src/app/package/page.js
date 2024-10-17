import AuthLayout from "@/layout/AuthLayout/AuthLayout"
import PackagePage from "./PackagePage"

const Page = () => {
    return (
        <AuthLayout>
            <div className="w-[90%] xl:w-[70%] flex xl:items-center">
                <PackagePage />
            </div>
        </AuthLayout>
    )
}

export default Page
