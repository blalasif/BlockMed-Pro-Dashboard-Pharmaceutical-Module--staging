"use client"

import Image from 'next/image';
import SidebarDropdown from './sidebarDropdown/SidebarDropdown';
import { toggleLogoutModal } from '@/redux/appSlice/AppSlice';
import { content } from '@/data/data';
import StyledLgText from '@/common/components/styledLgText/StyledLgText';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

const Sidebar = () => {

    const sidebarContent = content?.sidebar;

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(toggleLogoutModal(true));
    };

    return (
        <div className="flex flex-col items-center justify-between h-full w-[19.5%] overflow-hidden bg-white shadow-lg fixed">
            <div className="flex flex-col items-center gap-5 w-[80%] pt-[7%]">
                <Link href="/dashboard" className="w-full">
                    <Image src="/assets/icons/sidebarLogo.svg" alt="logo" width={210} height={100} className="w-full" />
                </Link>
                <div className="w-full">
                    <hr className="w-full text-light-gray" />
                </div>
                <div className="flex flex-col w-full gap-1">
                    <div className='w-full'>
                        {sidebarContent?.map((item, index) =>
                        (
                            <div key={index}>
                                <SidebarDropdown item={item} />
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
            <div onClick={handleClose} className={`flex items-center shadow-md mb-5 justify-between rounded-[10px] w-[80%] py-4 px-5 cursor-pointer bg-opacity-20 bg-dark-gray`}>
                <div className="flex items-center justify-between w-full">
                    <StyledLgText font="text-black font-medium">Logout</StyledLgText>
                    <div className="rotate-180">
                        <Icon icon="mynaui:logout" width="20" height="20" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
