import React, { useRef } from 'react';
import StyledH4Heading from '@/common/components/styledH4Heading/StyledH4Heading';
import { toggleLogoutModal } from '@/redux/appSlice/AppSlice';
import { useDispatch } from 'react-redux';
import StyledLgText from '@/common/components/styledLgText/StyledLgText';
import Button from '@/components/button/Button';
import { Icon } from '@iconify/react';
import useOutsideClick from '@/hooks/useOutsideClick';
import Modal from '../Modal/Modal';
import Link from 'next/link';

const LogoutModal = () => {

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(toggleLogoutModal(false));
    };

    const logoutModal = useRef(null);
    useOutsideClick(logoutModal, () => handleClose());

    return (
        <Modal>
            <div ref={logoutModal} className="p-7 bg-white rounded-[18px] flex flex-col gap-7 w-[90%] xl:w-[458px] relative">
                <div className="absolute cursor-pointer top-3 right-3 w-max" onClick={handleClose}>
                    <Icon icon="gg:close-o" width="24" height="24" />
                </div>
                <div className="flex flex-col gap-2 pt-2">
                    <div>
                        <StyledH4Heading font="text-black">Logout</StyledH4Heading>
                    </div>
                    <div>
                        <StyledLgText font="text-dark-gray">Are you sure you want to logout of this account?</StyledLgText>
                    </div>
                </div>
                <div className="flex w-full gap-2">
                    <Button onClick={handleClose} font="text-dark-gray font-semibold text-lg" variant="outlined-button">Cancel</Button>
                    <Link onClick={handleClose} href="/login" className="w-full">
                        <Button font="text-white font-semibold text-lg" variant="bg-light-blue-gradient">Logout</Button>
                    </Link>
                </div>
            </div>
        </Modal>
    );
};

export default LogoutModal;
