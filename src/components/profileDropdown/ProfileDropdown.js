import { useRef } from "react";
import StyledLgText from "@/common/components/styledLgText/StyledLgText";
import useOutsideClick from "@/hooks/useOutsideClick";
import { toggleLogoutModal } from '@/redux/appSlice/AppSlice';
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useDispatch } from "react-redux";

const ProfileDropdown = ({ dropdownItems, setShowInfo, exceptionRef }) => {
    const tooltipRef = useRef(null);
    useOutsideClick(tooltipRef, () => setShowInfo(false), exceptionRef);

    const dispatch = useDispatch();

    const handleLogoutClick = () => {
        setShowInfo(false)
        dispatch(toggleLogoutModal(true));
    };

    return (
        <div className="bg-white z-10 absolute top-12 rounded-[16px] right-0 p-2 flex flex-col shadow-lg w-[239px]" ref={tooltipRef}>
            {dropdownItems?.map((item, index) => (
                <>
                    {
                        dropdownItems.length - 1 !== index ?
                            <Link key={index} href={item?.link} className="w-full hover:bg-dark-blue-gradient flex items-center text-black hover:text-white cursor-pointer rounded-[10px] p-3 gap-3">
                                <Icon icon={item?.icon} width="22" height="22" />
                                <StyledLgText font="font-normal">{item?.title}</StyledLgText>
                            </Link>
                            :
                            <div key={index} onClick={handleLogoutClick} className="w-full hover:bg-dark-blue-gradient flex items-center text-red hover:text-white cursor-pointer rounded-[10px] p-3 gap-3">
                                <Icon icon={item?.icon} width="22" height="22" />
                                <StyledLgText font="font-normal">{item?.title}</StyledLgText>
                            </div>
                    }
                    {
                        dropdownItems.length - 1 !== index &&
                        <hr className="my-1.5 text-light-gray w-full" />
                    }
                </>
            )
            )}
        </div>
    );
};

export default ProfileDropdown;
