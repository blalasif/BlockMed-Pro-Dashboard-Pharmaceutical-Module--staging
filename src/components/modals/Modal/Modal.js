import React from 'react'

const Modal = ({ children }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full py-10 bg-black bg-opacity-50 backdrop-blur-sm xl:py-0">
            {children}
        </div>
    )
}

export default Modal
