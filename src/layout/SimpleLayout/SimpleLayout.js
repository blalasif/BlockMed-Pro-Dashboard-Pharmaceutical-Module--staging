import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

const SimpleLayout = ({ children }) => {
    return (
        <div className='flex flex-col items-center w-full h-full gap-5 xl:justify-center'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default SimpleLayout
