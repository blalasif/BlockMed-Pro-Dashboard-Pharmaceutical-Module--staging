import SimpleLayout from "@/layout/SimpleLayout/SimpleLayout"
import PaymentStatus from "./PaymentStatus"

const Page = () => {
    return (
        <SimpleLayout>
            <div className="w-full h-[76.4vh] md:h-screen xl:h-[76.4vh] 2xl:h-[82.95vh] flex justify-center items-center">
                <PaymentStatus />
            </div>
        </SimpleLayout>
    )
}

export default Page
