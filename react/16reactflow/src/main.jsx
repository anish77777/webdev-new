import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyJsxElement(){
    return(
        <h1>MyJsxElement</h1>
    )
}
// this is jsx syntax.
// who convert this jsx syntax into React.createElement ??
// -> it's babel babel is a compiler whereas bundler means package manager
// package manager -> for installing or importing packages
// compiler -> for compiling code
// bundler -> for bundling code (means combine all the files)
// bundler -> for creating a bundle of all the files
// bundler -> for creating a optimized version of our code (means remove code that is not used, minifying code etc)
// so bundler is a software that combines all the files and creates a optimized version of our code and injects it into the DOM.
// babel is a compiler that converts jsx syntax into React.createElement and injects it into the DOM
// know the difference between compiler and bundler
// compiler -> converts one programming language to another
// bundler -> combines all the files and creates a optimized version of our code and injects it into the DOM.
// bundler is a tool that combines all the files and creates a optimized version of our code and injects it into the DOM.
// understand it as a sugar coating over React.createElement
// it is not actual syntax the actual syntax is React.createElement
// first it goes through babel then it is converted to React.createElement
// we can check this in console.log(MyJsxElement) in browser
// in browser console you will see that it is converted to React.createElement

// in 15customReact.js we created a function customRender and called it to render the element to the DOM.
// here we are using React.createElement and ReactDOM.createRoot to render the element to the DOM.
// React.createElement is a function that creates a React element.
// ReactDOM.createRoot is a function that creates a React root.
// it is used to inject the element into the DOM.


// const reactElement={
//     type:'a',
//     props:{
//         href:"https://google.com",
//         target:"_blank"
//     },
//     children:"Click me to visit google"
// }
// this is how react element looks like in console
// that is it's structure
// type->tag name
// props->attributes
// children->content inside the tag

// if u want want to render object this should be the structure
const ReactElememt=React.createElement(
    'a',
    {
        href:"https://google.com",
        target:"_blank"
    },
    'Click me to visit google'
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
