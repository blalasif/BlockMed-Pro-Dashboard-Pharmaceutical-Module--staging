
import StyledH6Heading from '@/common/components/styledH6Heading/StyledH6Heading'

const InputField = ({ disabled, label, name, type, value, onChange, placeholder, error, required, onFocus, styling, ...props }) => {
    return (
        <div className='flex flex-col gap-2'>
            {
                label &&
                <div>
                    <StyledH6Heading>
                        {label}{required && <span className='text-red'>*</span>}
                    </StyledH6Heading>
                </div>}
            <div>
                <input {...props} onFocus={onFocus} name={name} disabled={disabled} type={type} value={value} onChange={onChange} placeholder={placeholder} className={`px-5 py-4 text-gray border font-inter text-h6 placeholder:text-h6 placeholder:text-dark-gray disabled:text-dark-gray disabled:border-light-gray placeholder:font-medium disabled:cursor-not-allowed font-medium focus:outline-none rounded-[12px] w-full hover:border-purple ${styling}`} />
            </div>
            {error && (
                <div className="text-sm text-red">{error}</div>
            )}
        </div>
    )
}

export default InputField
