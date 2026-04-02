import { useState } from "react";
import './App.css';
import Navbar from "./compoent/Navbar";
import Footer from "./compoent/Footer";

function App() {
  const [value, setValue] = useState(0);
  return (
    <>
    <Navbar />
    <div className="App">
      {/* we cant use class name in react we have to use className */}
      {/* we cant use self closing tags in react we have to close them like <img /> */}
      {/* we cant use class cause class is a reserved keyword in react */}
      <div className="box" style={{backgroundColor: "red"}}>
        {value}
      </div>  
    </div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <Footer />
    </>
  );
}

export default App;
