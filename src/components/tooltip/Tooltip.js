import StyledLgText from "@/common/components/styledLgText/StyledLgText"
import { useRef } from "react"
import useOutsideClick from "@/hooks/useOutsideClick"

const Tooltip = ({ heading, content, setShowInfo, exceptionRef }) => {

    const tooltipRef = useRef(null);
    useOutsideClick(tooltipRef, () => setShowInfo(false), exceptionRef);

    return (
        <div className="bg-black z-10 absolute top-8 rounded-[16px] right-0 text-white p-8 flex flex-col gap-5 w-[300px] xl:w-[370px]" ref={tooltipRef}>
            <div>
                <StyledLgText font="text-white font-semibold">{heading}</StyledLgText>
            </div>
            <div>
                <p className="text-sm font-inter" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    )
}
export default Tooltip
