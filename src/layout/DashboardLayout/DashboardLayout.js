'use client'

import { useSelector } from "react-redux";
import DashboardHeader from "../components/dashboardHeader/DashboardHeader";
import Sidebar from "../components/sidebar/Sidebar";
import LogoutModal from "@/components/modals/LogoutModal/LogoutModal";
import PaymentPlanModal from "@/components/modals/PaymentPlanModal/PaymentPlanModal";

const DashboardLayout = ({ children }) => {

    const showLogoutModal = useSelector((state) => state.app.showLogoutModal);
    const showPaymentPlanModal = useSelector((state) => state.app.showPaymentPlanModal);
    const showMobileHeader = useSelector((state) => state.app.showMobileHeader);

    return (
        <div className="w-full max-w-[2140px] mx-auto relative">
            {/* Backdrop layer */}
            {showMobileHeader && (
                <div className="fixed inset-0 z-10 delay-1000 bg-black bg-opacity-50 backdrop-blur-sm"></div>
            )}
            <div className={`flex w-full relative`}>
                <div className="w-[19.5%] hidden xl:block">
                    <Sidebar />
                </div>
                <div className={`flex flex-col gap-3 h-full xl:h-screen w-full xl:w-[80.5%]`} style={{
                    background: `url("/assets/images/bg-dashboardPage.png")`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right",
                    backgroundAttachment: "fixed",
                }}>
                    <div className="flex justify-center w-full">
                        <DashboardHeader />
                    </div>
                    <div className="w-full overflow-auto duration-500 h-full pt-[85px] xl:pt-[7.5%] pb-[7%] xl:px-[2.5%]">
                        {children}
                    </div>
                </div>
            </div>
            {showLogoutModal &&
                <LogoutModal />
            }
            {showPaymentPlanModal &&
                <PaymentPlanModal />
            }
        </div>
    );
}

export default DashboardLayout;
