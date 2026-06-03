import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const [count, setCount] = useState(0);

  const { register, handleSubmit,setError, formState: { errors, isSubmitting } } = useForm();
  // isSubmitting use to disable submit button during submission
  // setError use to set error custom error message for field
  // if user doesnot match to server we can use setError to display error message
  // error is object it self where it contain property of field name
  const delay = (d) => {
    return new Promise((resolve,reject)=>setTimeout(resolve, 1000*d));
    
  }

  const onSubmit = async (data,e) => {
    e.preventDefault();
    // await delay(1);
    // simulating network delay before sending data to server 
    // during submitting we want to disable the submit button 
    // so we use disabled={isSubmitting} on submit button 
    // in this case button will be disabled when it is submitting
    // and again enabled when it is submitted or error
    let r = await fetch("http://localhost:3000");
    // this tells backend to send response to this frontend server
    // if we dont give this cors then it will not send response to this frontend server
    let resdata = await r.text();
    console.log(data,resdata);
    // if(data.username == "admin123" && data.password == "admin123"){
    //   setError("auth", {message: "invalid username"});
    // }
    // else if(data.username === "rohan123" && data.password === "rohan123"){
    //   setError("blocked", {message: "blocked account"});
    // }
  } // this is handler function 
  // THIS WILL GIVE OBJECT in form of {username: 'username', password: 'password'}
  // username is from the register function 
  // and this will be passed to the onSubmit function
  // and this will be passed to the submit handler function 
  return (
    <>{isSubmitting && <p>Submitting...</p>}
      <div className="container"> 
        <form  onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("username",{required: {value:true,message: 'username is required'},minLength: {value: 8,message: 'username is too short'},maxLength: 50})}  placeholder='enter username'/>
        {/* u can give number but give obj to min and max {value:8,message:'' to display message} */}
        {/* here validation become easy and we can add more validations like pattern match ,custom error msg and so on */}
        {/* if there is error in username or password it will be displayed in real time if any error */}
        {errors.username && <p style={{color: 'red'}}>{errors.username.message}</p>}
        {/* you have to give obj of min and max and with msg not a single number {value: 8,message: 'username is too short'}
        to see msg in output else it will be blank cause of undefined */}
        <br />
        <input type="password" {...register("password",{required: true,minLength: {value: 8,message: 'password is too short'},maxLength: 50})}  placeholder='enter password'/>
        {/* if there is error in username or password it will be displayed in real time if any error */}
        {errors.password && <p style={{color: 'red'}}>{errors.password.message}</p>}
        <br />
        <input disabled={isSubmitting} type="submit" value="Login" />

        {/* {errors.auth && <p style={{color: 'red'}}>{errors.auth.message}</p>}
        {errors.blocked && <p style={{color: 'red'}}>{errors.blocked.message}</p>} */}
        </form>
        
      </div>
      {/* this require handling event and prevent default and in vanilla js we can just do this 
      these are pain in the ass and validation is also pain in the ass 
      how to solve it 
      we use 
    react hook form  which is a library that helps to handle forms in react 
    so we can just use it 
    install it using 
    npm i react hook form 
    
     */}
    </>
  )
}

export default App
