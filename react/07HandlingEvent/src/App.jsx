import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("second")
  const [form, setForm] = useState({ name: "", email: "", phone: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    // HERE [e.target.name] is used to update the value of the input field with the name attribute equal to the value of e.target.name
    // so if the input field has name="email" then it will update the value of the email field
    // and if the input field has name="phone" then it will update the value of the phone field
    // WHY []
    // because [] is used to update the value of the input field with the name attribute equal to the value of e.target.name
    // and if the input field has name="phone" then it will update the value of the phone field
    // SO It like the looping of obj using key where we can use key value by using obj[key]
    console.log(e.target.name)
  }
  console.log(form)

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <div className='red' onMouseOver={() => alert('You hovered over the red div')}>
          I am a red div
        </div>
      </div>
      <input type="text" value="hello" /> 
      {/* THIS INPUT CANNNOT BE CHANGED BY TYPING */}
  
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>

      <input type="text" name="email" value={form.email?form.email:""} onChange={handleChange} />
      <input type="text" name="phone" value={form.phone ? form.phone : ""} onChange={handleChange} />
      
      {/* if i have put useState("") in form then it will come error at value={form.email} cause there is no vale so we put 
      form.email?form.email:"" to avoid the error*/}
      

    </>
  )
}

export default App
