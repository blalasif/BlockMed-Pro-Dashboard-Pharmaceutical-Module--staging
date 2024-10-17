import React from 'react'

const ContainerCard = ({ styling, children }) => {
    return (
        <div className={`w-full rounded-[12px] bg-white shadow-lg p-4 ${styling}`}>
            {children}
        </div>
    )
}

export default ContainerCard
