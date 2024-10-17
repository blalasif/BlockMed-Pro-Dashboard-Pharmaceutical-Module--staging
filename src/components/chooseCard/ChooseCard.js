import React from 'react'
import StyledMdText from '@/common/components/styledMdText/StyledMdText'
import Image from 'next/image'
import { content } from '@/data/data';

const ChooseCard = ({ data, onChange }) => {

    const cardConfig = content?.cardType?.find(card => card?.type === data?.type);

    return (
        <div onClick={() => onChange(data)} className={`flex items-center justify-between w-full cursor-pointer rounded-[12px] px-4 border py-8 ${data?.isDefault ? "bg-off-white border-transparent" : "border-light-gray"}`}>
            <div className="flex items-center gap-3">
                <div>
                    <label className="cursor-pointer gradient-checkbox">
                        <input
                            type="checkbox"
                            className="checkbox"
                            checked={data?.isDefault}
                            onChange={onChange}
                        />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="flex items-center w-full gap-3">
                    <div className="w-full">
                        <Image src={cardConfig?.svg} alt="Card" width={20} height={20} />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <StyledMdText font="text-dark-gray font-semibold capitalize">{data?.type}</StyledMdText>
                        <StyledMdText font="text-black font-semibold whitespace-nowrap">{data?.number} | {data?.expiry}</StyledMdText>
                    </div>
                </div>
            </div>
            {
                data?.isDefault &&
                <div>
                    <StyledMdText font="text-dark-gray font-semibold">Default</StyledMdText>
                </div>}
        </div>
    )
}

export default ChooseCard
