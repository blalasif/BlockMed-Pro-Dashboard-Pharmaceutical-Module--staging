import StyledMdText from '@/common/components/styledMdText/StyledMdText'
import { Icon } from '@iconify/react'
import React from 'react'

const ClearAllFiltersButton = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="flex items-center h-full gap-2 px-2 bg-transparent w-max hover:bg-red hover:bg-opacity-10 text-red rounded-[6px]">
            <div>
                <Icon icon="fluent:delete-32-filled" width="24" height="24" />
            </div>
            <StyledMdText font='font-semibold'>
                {children}
            </StyledMdText>
        </button>
    )
}

export default ClearAllFiltersButton
