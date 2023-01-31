
interface IInputLabelProps {
    label: string,
    typeInput: string,
    inputValue: string,
    extraClass?: string,
    onValueChange: (value: string) => void
}

const InputLabel = ({
    label,
    typeInput,
    inputValue,
    extraClass,
    onValueChange
}: IInputLabelProps) => {
    
    return (
        <>
            <h3>{label}</h3>
            <input
                className={`mb-16 ${extraClass}`}
                type={typeInput}
                value={inputValue}
                onChange={(e) => onValueChange(e.target.value)} placeholder="Email Address*"
            />    
        </>
    )
    
}

export default InputLabel;