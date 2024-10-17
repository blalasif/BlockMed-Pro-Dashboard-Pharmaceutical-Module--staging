import { useState, useRef } from "react";
import Link from 'next/link';
import Button from '@/components/button/Button';
import Image from 'next/image';
import ProfileDropdown from "@/components/profileDropdown/ProfileDropdown";
import { content } from "@/data/data";
import MobileHeader from "../mobileHeader/MobileHeader";
import { useSelector } from "react-redux";

const DashboardHeader = () => {
    const [showInfo, setShowInfo] = useState(false);
    const profileImageRef = useRef(null);
    const showMobileHeader = useSelector((state) => state.app.showMobileHeader);

    return (
        <div className='w-[95%] xl:w-[76.5%] h-[70px] shadow-lg z-10 flex gap-3 xl:gap-4 bg-white xl:bg-opacity-40 items-center !justify-between xl:justify-end px-4 xl:px-7 rounded-[12px] fixed top-2.5 backdrop-blur-[10px]'>
            {showMobileHeader && (
                <div className="fixed inset-0 z-10 delay-1000 bg-black bg-opacity-50 backdrop-blur-sm"></div>
            )}
            <div className="flex justify-start xl:hidden">
                <MobileHeader />
            </div>
            <div className="flex items-center gap-3 xl:w-full xl:justify-end xl:gap-4">
                <Link className='w-[16.5%] hidden xl:block' href="/search-user-database">
                    <Button font="text-white font-semibold text-lg !py-3" variant="bg-light-blue-gradient">Buy Patient Data</Button>
                </Link>
                <Link href='/coming-soon'>
                    <Image src="/assets/icons/bell-icon.svg" alt="notifications" width={40} height={40} className="cursor-pointer" />
                </Link>
                <Link href='/coming-soon'>
                    <Image src="/assets/icons/chat.svg" alt="chat" width={40} height={40} className="cursor-pointer" />
                </Link>
                <div className="relative">
                    <Image ref={profileImageRef} onClick={() => setShowInfo(!showInfo)} src="/assets/icons/profile.svg" alt="profile" width={40} height={40} className="z-10 cursor-pointer" />
                    {showInfo &&
                        <ProfileDropdown setShowInfo={setShowInfo} dropdownItems={content?.header} exceptionRef={profileImageRef} />
                    }
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;
