import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";
import InputLabel from "../../components/InputLabel/InputLabel";
import { loginUser } from "../../services/user.service";
import { useAppDispatch } from '../../hooks/useRedux';

import '../style/login.css';

const Login = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (email.trim() !== "" && password.trim() !== "") {
      dispatch(loginUser({email: email, password: password}))
      .then(value => {
        if(value.payload) {
          navigate('/home')
        }
      })
    }
    //Todo Manage Error Here
  }
  
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Log In</h1>
         <div className='flex flex-col'>
            <form className='form' onSubmit={(e) => handleLogin(e)}>
            
              <InputLabel
                label="Email"
                typeInput="text"
                inputValue={email}
                onValueChange={(value) =>  setEmail(value)}
              />
            
              <InputLabel
                label="Password"
                typeInput="password"
                extraClass="mb-8"
                inputValue={password}
                onValueChange={(value) =>  setPassword(value)}
              />

              <Button text="Login" />
              
              <span className='flex justify-center px-4 mt-6' >Dont have an account ? <Link to={"/register"} className="text-indigo-600 ml-2">Create an account</Link></span>
            </form>
        </div>
      </div>
    </div>
  )
};

export default Login;
