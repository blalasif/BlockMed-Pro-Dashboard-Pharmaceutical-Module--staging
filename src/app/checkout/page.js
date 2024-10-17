import SimpleLayout from "@/layout/SimpleLayout/SimpleLayout"
import CheckoutPage from "./CheckoutPage"

const Page = () => {
    return (
        <SimpleLayout>
            <div className="w-[90%] xl:w-[80%] h-full">
                <CheckoutPage />
            </div>
        </SimpleLayout>
    )
}

export default Page
