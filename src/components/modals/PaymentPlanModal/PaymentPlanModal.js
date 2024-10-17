import React, { useRef } from 'react';
import { togglePaymentPlanModal } from '@/redux/appSlice/AppSlice';
import { useDispatch } from 'react-redux';
import StyledLgText from '@/common/components/styledLgText/StyledLgText';
import { Icon } from '@iconify/react';
import useOutsideClick from '@/hooks/useOutsideClick';
import StyledH3Heading from '@/common/components/styledH3Heading/StyledH3Heading';
import Link from 'next/link';
import ContainerCard from '@/components/containerCard/ContainerCard';
import StyledH4Heading from '@/common/components/styledH4Heading/StyledH4Heading';
import StyledMdText from '@/common/components/styledMdText/StyledMdText';
import StyledH5Heading from '@/common/components/styledH5Heading/StyledH5Heading';
import Button from '@/components/button/Button';
import StyledH2Heading from '@/common/components/styledH2Heading/StyledH2Heading';
import Image from 'next/image';
import Modal from '../Modal/Modal';

const PaymentPlanModal = () => {

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(togglePaymentPlanModal(false));
    };

    const paymentPlanModal = useRef(null);
    useOutsideClick(paymentPlanModal, () => handleClose());

    return (
        <Modal>
            <div ref={paymentPlanModal} className="p-7 bg-dull-white rounded-[18px] items-center flex flex-col gap-5 xl:gap-10 w-[90%] xl:w-[55%] h-full xl:h-max relative overflow-auto">
                <div className="absolute cursor-pointer top-3 right-3 w-max" onClick={handleClose}>
                    <Icon icon="gg:close-o" width="24" height="24" />
                </div>
                <div className="flex justify-center pt-2">
                    <StyledH3Heading font="text-black xl:leading-tight leading-none">Select a Payment Plan</StyledH3Heading>
                </div>
                <div className="flex flex-col w-full gap-5 xl:flex-row">
                    <ContainerCard styling="flex flex-col gap-3 items-center p-7 !shadow-xl">
                        <div>
                            <StyledH4Heading font="text-light-blue-gradient">Non-Clinical Data</StyledH4Heading>
                        </div>
                        <div>
                            <StyledMdText font="text-dark-gray text-center">Includes: <br />Age, Sex, Ethnicity & Location</StyledMdText>
                        </div>
                        <div className="w-full">
                            <hr className="w-full text-dark-gray" />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <div>
                                <StyledH5Heading font="text-dark-blue">Pricing</StyledH5Heading>
                            </div>
                            <div className="flex justify-between w-full pt-3">
                                <div>
                                    <StyledLgText font="text-dark-gray">Total Search Result</StyledLgText>
                                </div>
                                <div>
                                    <StyledLgText font="text-dark-gray">1000</StyledLgText>
                                </div>
                            </div>
                            <div className="flex justify-between w-full">
                                <div className="w-[60%]">
                                    <StyledLgText font="text-dark-gray">Cost per search result for 12 months</StyledLgText>
                                </div>
                                <div>
                                    <StyledLgText font="text-dark-gray">$10</StyledLgText>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <hr className="w-full text-dark-gray" />
                        </div>
                        <div className="flex justify-between w-full pt-3">
                            <div>
                                <StyledLgText font="text-dark-blue font-semibold">Total Price</StyledLgText>
                            </div>
                            <div>
                                <StyledLgText font="text-dark-blue font-semibold">$10,000</StyledLgText>
                            </div>
                        </div>
                        <div className="w-full pt-3">
                            <Button font="text-white font-normal text-lg rounded-[8px]" variant="bg-light-blue-gradient">Pay Now</Button>
                        </div>
                    </ContainerCard>
                    <ContainerCard styling="bg-dark-blue-gradient flex flex-col gap-3 items-center px-7 py-14 xl:px-7 xl:py-7 xl:scale-105 !shadow-xl relative">
                        <div className="absolute -right-1 -top-1">
                            <Image src="/assets/icons/exclusive.svg" alt="Exclusive" width={95} height={95} />
                        </div>
                        <div>
                            <StyledH4Heading font="text-white">Complete Dataset</StyledH4Heading>
                        </div>
                        <div>
                            <StyledH2Heading font="text-white text-center">$ 10,000</StyledH2Heading>
                        </div>
                        <div className="w-full">
                            <hr className="w-full text-dark-gray" />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <div>
                                <StyledH5Heading font="text-white">Pricing</StyledH5Heading>
                            </div>
                            <div className="flex justify-between w-full pt-3">
                                <div>
                                    <StyledLgText font="text-white">Total Search Result</StyledLgText>
                                </div>
                                <div>
                                    <StyledLgText font="text-white">1000</StyledLgText>
                                </div>
                            </div>
                            <div className="flex justify-between w-full">
                                <div className="w-[60%]">
                                    <StyledLgText font="text-white">Per user data price</StyledLgText>
                                </div>
                                <div>
                                    <StyledLgText font="text-white">$10</StyledLgText>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <hr className="w-full text-white" />
                        </div>
                        <div className="flex justify-between w-full pt-3">
                            <div>
                                <StyledLgText font="text-white font-semibold">Total Price</StyledLgText>
                            </div>
                            <div>
                                <StyledLgText font="text-white font-semibold">$10,000</StyledLgText>
                            </div>
                        </div>
                        <div className="w-full pt-3">
                            <Button font="text-white font-normal text-lg rounded-[8px]" variant="white-button">Pay Now</Button>
                        </div>
                    </ContainerCard>
                </div>
                <Link onClick={handleClose} href="/search-user-database">
                    <StyledLgText font="text-dark-gray font-semibold underline">I Want To Change Filters</StyledLgText>
                </Link>
            </div>
        </Modal>
    );
};

export default PaymentPlanModal;
