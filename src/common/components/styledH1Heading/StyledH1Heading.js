 

const StyledH1Heading = ({ children, font }) => {
    return (
        <h1 className={`text-h1 font-extrabold font-inter leading-none ${font}`}>{children}</h1>
    )
}

export default StyledH1Heading
