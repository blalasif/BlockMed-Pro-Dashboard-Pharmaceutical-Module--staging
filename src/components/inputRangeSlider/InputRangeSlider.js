"use client";

import React, { useEffect, useState } from "react";
import { Range } from "react-range";
import Image from "next/image";
import StyledLgText from "@/common/components/styledLgText/StyledLgText";
import StyledMdText from "@/common/components/styledMdText/StyledMdText";
import InputField from "../inputField/InputField";

const InputRangeSlider = ({ heading, subheading, values, setValues }) => {
    const [min, setMin] = useState(values[0]);
    const [max, setMax] = useState(values[1]);

    useEffect(() => {
        setMin(values[0]);
        setMax(values[1]);
    }, [values]);

    const handleSliderChange = (newValues) => {
        setValues(newValues);
    };

    const handleInputChange = (type, value) => {
        const newValues = type === "min" ? [value, max] : [min, value];
        setValues(newValues);
    };

    return (
        <div className="flex flex-col w-full gap-3">
            <div className="flex flex-col w-full">
                <div>
                    <StyledLgText font="text-dark-blue font-semibold">
                        {heading}
                    </StyledLgText>
                </div>
                <div>
                    <StyledMdText font="text-dark-gray">
                        {subheading}
                    </StyledMdText>
                </div>
            </div>
            <div className="flex flex-col w-full gap-5">
                <div className="flex items-center gap-3">
                    <div>
                        <StyledLgText font="text-black">Min</StyledLgText>
                    </div>
                    <div>
                        <InputField
                            styling="!p-1.5 text-center"
                            type="text"
                            value={min}
                            onChange={(e) => handleInputChange("min", Number(e.target.value))}
                            placeholder="0"
                            inputMode="numeric"
                        />
                    </div>
                    <div>
                        <Image src="/assets/icons/dash.svg" alt="Dash" width={30} height={1} />
                    </div>
                    <div>
                        <StyledLgText font="text-black">Max</StyledLgText>
                    </div>
                    <div>
                        <InputField
                            styling="!p-1.5 text-center"
                            type="text"
                            value={max}
                            onChange={(e) => handleInputChange("max", Number(e.target.value))}
                            placeholder="1000"
                            inputMode="numeric"
                        />
                    </div>
                </div>
                <div>
                    <Range
                        step={1}
                        min={0}
                        max={100}
                        values={values}
                        onChange={handleSliderChange}
                        renderTrack={({ props, children }) => {
                            const minPercentage = ((values[0] - 0) / (100 - 0)) * 100;
                            const maxPercentage = ((values[1] - 0) / (100 - 0)) * 100;

                            return (
                                <div
                                    {...props}
                                    style={{
                                        ...props.style,
                                        height: "6px",
                                        width: "100%",
                                        background: `linear-gradient(to right, #EDEDED ${minPercentage}%, #600faf ${minPercentage}%, #600faf ${maxPercentage}%, #EDEDED ${maxPercentage}%)`,
                                    }}
                                >
                                    {children}
                                </div>
                            );
                        }}
                        renderThumb={({ props, index }) => (
                            <div
                                {...props}
                                key={index}
                                style={{
                                    ...props.style,
                                    height: "24px",
                                    width: "24px",
                                    borderRadius: "50%",
                                    background: "linear-gradient(155deg, #ad00ff 0%, #007ee0 80%)",
                                }}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default InputRangeSlider;
