"use client";

import React, { useState, useEffect } from 'react';
import StyledMdText from '@/common/components/styledMdText/StyledMdText';
import { Icon } from '@iconify/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const SidebarDropdown = ({ item }) => {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (item?.children) {
            const isOpenInitially = item?.children.some(child => child?.link === pathname);
            setIsOpen(isOpenInitially);
        }
    }, [item?.children, pathname]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {item?.children && item?.children.length > 0 ? (
                <div className={`flex items-center shadow-md my-1 justify-between rounded-[10px] h-full w-full p-5 cursor-pointer ${isOpen ? "bg-light-blue-gradient" : "bg-white"}`} onClick={toggleDropdown}>
                    <div className="flex items-center w-full gap-2">
                        <div>
                            <Image src={isOpen ? item?.dashboardIconActive : item?.dashboardIconNonActive} alt="Dashboard" width={32} height={32} />
                        </div>
                        <div>
                            <StyledMdText font={`font-semibold ${isOpen ? "text-white" : "text-dark-blue"}`}>{item?.title}</StyledMdText>
                        </div>
                    </div>
                    <div className={isOpen ? "!text-white duration-500" : "!text-dark-blue -rotate-90 duration-500"}>
                        <Icon icon="iconamoon:arrow-down-2-light" width="15" height="15" />
                    </div>
                </div>
            ) : (
                <Link href={item?.link}>
                    <div className={`flex items-center shadow-md my-2 justify-between rounded-[10px] h-full w-full p-5 cursor-pointer ${pathname === item?.link ? "bg-light-blue-gradient" : "bg-white"}`}>
                        <div className="flex items-center gap-2">
                            <Image src={pathname === item?.link ? item?.searchIconActive : item?.searchIconNonActive} alt="search" width={32} height={32} />
                            <StyledMdText font={`font-semibold ${pathname === item?.link ? "text-white" : "text-dark-blue"}`}>{item?.title}</StyledMdText>
                        </div>
                    </div>
                </Link>
            )}
            {isOpen && item?.children && (
                <div className='flex flex-col pt-2 cursor-pointer'>
                    {item?.children.map((child, index) => (
                        <Link href={{ pathname: child?.link, ...(child?.tabName && { query: { tab: child?.tabName } }) }} key={index}>
                            <div className="px-5 py-4 border-t-0 border-x-0 border-b-[1px] w-full flex items-center gap-2 border-light-gray">
                                <StyledMdText font={`font-semibold ${pathname === child?.link ? "text-black" : "text-dark-gray"}`}>•</StyledMdText>
                                <StyledMdText font={`font-semibold ${pathname === child?.link ? "text-black" : "text-dark-gray"}`}>{child?.title}</StyledMdText>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SidebarDropdown;
