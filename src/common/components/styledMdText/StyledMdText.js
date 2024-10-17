 

const StyledMdText = ({ children, font }) => {
    return (
        <p className={`text-md font-inter ${font}`}>{children}</p>
    )
}

export default StyledMdText
