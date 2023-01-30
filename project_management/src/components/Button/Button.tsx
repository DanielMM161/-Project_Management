
interface IButtonProps {
    text: string;
    disabled?: boolean
}

const Button = ({ text, disabled = false }:IButtonProps) => {

    return (
        <div className='flex justify-center align-center'>
            <button className='w-full px-8 py-3' disabled={disabled}>{text}</button>
        </div>
    )
}

export default Button;