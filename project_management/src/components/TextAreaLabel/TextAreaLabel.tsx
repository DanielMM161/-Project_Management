interface ITextAreaLabelProps {
  label: string,
  inputValue: string,
  extraClass?: string,
  onValueChange: (value: string) => void
}

const TextAreaLabel = ({
  label,
  inputValue,
  extraClass,
  onValueChange
}: ITextAreaLabelProps) => {
  
  return (
    <>
      <h3>{label}</h3>
      <textarea
          className={`${extraClass}`}
          value={inputValue}
          rows={6}
          cols={50}
          onChange={(e) => onValueChange(e.target.value)}
      >
      </textarea>    
    </>
  )    
}

export default TextAreaLabel;