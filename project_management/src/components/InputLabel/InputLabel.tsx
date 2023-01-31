interface IInputLabelProps {
    label: string,
    typeInput: string,
    inputValue: string,
    extraClass?: string,
    placeHolder: string,
    onValueChange: (value: string) => void
}

const InputLabel = ({
    label,
    typeInput,
    inputValue,
    extraClass,
    placeHolder,
    onValueChange
}: IInputLabelProps) => {
    
    return (
        <>
            <h3>{label}</h3>
            <input
                className={`mb-16 ${extraClass}`}
                type={typeInput}
                value={inputValue}
                onChange={(e) => onValueChange(e.target.value)} 
                placeholder={placeHolder}
            />    
        </>
    )    
}

export default InputLabel;