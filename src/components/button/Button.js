 

const Button = ({ children, variant, font, onClick, disabled, type }) => {

    return (
        <button disabled={disabled} onClick={onClick} type={type} className={`${font} py-4 rounded-[12px] w-full h-full disabled:cursor-not-allowed ${variant}`}>{children}</button>
    )
}

export default Button
