import { useState } from "react";

import { Link } from "react-router-dom";

import Button from "../../components/Button/Button";
import InputLabel from "../../components/InputLabel/InputLabel";

const Register = () => {
    
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [repeatPassword, setRepeatPassword] = useState<string>("")
    
    return (
        <div className="w-full h-full">
            <div className="flex items-center justify-center flex-col">
                <h1 className="text-3xl font-bold mr-4 sm:text-4xl">
                    Register
                </h1>
                <div className='flex flex-col'>
                    <form className='form'>
                        <InputLabel
                            label="Full Name"
                            typeInput="text"
                            inputValue={name}
                            onValueChange={(value) => setName(value)}
                        />
                            
                        <InputLabel
                            label="Email"
                            typeInput="text"
                            inputValue={email}
                            onValueChange={(value) =>  setEmail(value)}
                        />    
                            
                        <InputLabel
                            label="Password"
                            typeInput="password"
                            inputValue={password}
                            onValueChange={(value) =>  setPassword(value)}
                        />

                        <InputLabel
                            label="Repeat Password"
                            typeInput="password"
                            extraClass="mb-8"
                            inputValue={repeatPassword}
                            onValueChange={(value) =>  setRepeatPassword(value)}
                        />                      
                                        
                        <Button text="Sign Up" />
                            
                    <span className='flex justify-center px-4 mt-6' >Have an account ? <Link to={"/login"} className="text-indigo-600 ml-2">  Login</Link></span>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Register