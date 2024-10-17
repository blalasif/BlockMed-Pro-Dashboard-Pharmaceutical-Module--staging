import { useEffect, useState, useRef } from "react";
import { content } from '@/data/data';
import Image from "next/image";
import Link from "next/link";
import { toggleLogoutModal, toggleMobileHeader } from '@/redux/appSlice/AppSlice';
import StyledMdText from "@/common/components/styledMdText/StyledMdText";
import { usePathname } from "next/navigation";
import StyledLgText from "@/common/components/styledLgText/StyledLgText";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import useOutsideClick from "@/hooks/useOutsideClick";
import Button from "@/components/button/Button";

const MobileHeader = () => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const showMobileHeader = useSelector((state) => state.app.showMobileHeader)

    const handleClose = () => {
        dispatch(toggleLogoutModal(true));
    };

    useEffect(() => {
        dispatch(toggleMobileHeader(false));

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [pathname, dispatch]);

    const onToggleNav = () => {
        // Toggle the current state of showMobileHeader
        dispatch(toggleMobileHeader(!showMobileHeader));

        // Update the body's overflow style based on the new state
        if (!showMobileHeader) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };


    const mobileNav = useRef(null);
    useOutsideClick(mobileNav, () => dispatch(toggleMobileHeader(false)));

    return (
        <div className="relative z-50 xl:hidden">
            <Image onClick={onToggleNav} src="/assets/icons/menu.svg" alt="menu" width={30} height={30} className="cursor-pointer" />
            <div ref={mobileNav}
                className={`fixed z-100 -top-2.5 left-0 h-[100vh] w-[100vw] transform bg-white ${showMobileHeader ? "-translate-x-[25%]" : "-translate-x-[103%]"
                    }`}
                style={{ transition: "all 0.5s cubic-bezier(.68,-0.55,.27,1.55)" }}
            >
                <div className={`w-[65%] flex flex-col gap-5 items-center pt-14 ${showMobileHeader ? "ml-[28.5%]" : "ml-0 delay-1000"}`}>
                    <div className="flex items-center justify-between w-full gap-5">
                        <Link href="/dashboard" className="w-[80%]">
                            <Image src="/assets/icons/sidebarLogo.svg" alt="logo" width={180} height={100} className="w-full" />
                        </Link>
                        <div>
                            <Icon onClick={onToggleNav} icon="charm:cross" width="25" height="25" />
                        </div>
                    </div>
                    <div className="w-full">
                        <hr className="w-full text-light-gray" />
                    </div>
                </div>
                <nav
                    className={`fixed mt-3 h-[77.5%] items-start flex flex-col justify-between w-[65%] ${showMobileHeader ? "ml-[28.5%]" : "ml-0 delay-1000"} flex-col`}
                >
                    <div className='flex flex-col w-full pt-2 cursor-pointer'>
                        {content?.sidebar.map((item, index) => (
                            item.children?.map((child, childIndex) => (
                                <Link href={{ pathname: child?.link, ...(child?.tabName && { query: { tab: child?.tabName } }) }} key={`${index}-${childIndex}`}>
                                    <div className="px-1.5 py-4 border-t-0 border-x-0 border-b-[1px] w-full flex items-center gap-2 border-light-gray">
                                        <StyledMdText font={`font-semibold ${pathname === child?.link ? "text-black" : "text-dark-gray"}`}>•</StyledMdText>
                                        <StyledMdText font={`font-semibold ${pathname === child?.link ? "text-black" : "text-dark-gray"}`}>{child?.title}</StyledMdText>
                                    </div>
                                </Link>
                            ))
                        ))}
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <Link className='w-full' href="/search-user-database">
                            <Button font="text-white font-semibold text-lg" variant="bg-light-blue-gradient">Buy Patient Data</Button>
                        </Link>
                        <div className="w-full">
                            <hr className="w-full text-light-gray" />
                        </div>
                        <div onClick={handleClose} className={`flex items-center shadow-md my-3 justify-between rounded-[10px] w-full py-4 px-5 cursor-pointer bg-opacity-20 bg-dark-gray`}>
                            <div className="flex items-center justify-between w-full">
                                <StyledLgText font="text-black font-medium">Logout</StyledLgText>
                                <div className="rotate-180">
                                    <Icon icon="mynaui:logout" width="20" height="20" />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default MobileHeader;
