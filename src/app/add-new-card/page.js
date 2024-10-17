import SimpleLayout from "@/layout/SimpleLayout/SimpleLayout"
import AddNewCardPage from "./AddNewCardPage"

const Page = () => {
    return (
        <SimpleLayout>
            <div className="w-[90%] xl:w-[80%] h-full">
                <AddNewCardPage />
            </div>
        </SimpleLayout>
    )
}

export default Page
