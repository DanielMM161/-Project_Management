
interface IButtonProps {
    text: string;
}

const Button = ({ text }:IButtonProps) => {

    return (
        <div className='flex justify-center align-center'>
            <button className='w-full px-8 py-3'>{text}</button>
        </div>
    )
}

export default Button;