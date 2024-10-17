 

const StyledH6Heading = ({ children, font }) => {
    return (
        <h6 className={`text-h6 font-inter font-bold leading-none ${font}`}>{children}</h6>
    )
}

export default StyledH6Heading