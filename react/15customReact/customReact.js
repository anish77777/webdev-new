// simulation of how react creates a element internally
// this is not html it is a react element
const reactElement={
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"Click me to visit google"
}

const mainContainer = document.getElementById("root");

function customRender(reactElement,mainContainer){
// step1:
//     const domElement=document.createElement(reactElement.type)
//     domElement.innerHTML=reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)
//     mainContainer.appendChild(domElement)
 
// step2: handling all the attributes
  const domElement=document.createElement(reactElement.type)
  domElement.innerHTML=reactElement.children
  for(const prop in reactElement.props){
    if(prop==='children') continue;
    // why continue ? because children is not a attribute it is a text node.
    // it should not be set in setAttribute it is already handled by innerHTML
    domElement.setAttribute(prop,reactElement.props[prop])
  }
  mainContainer.appendChild(domElement)
  }

customRender(reactElement,mainContainer); 

// so the same process happens in real react library
// first step is same create a element
// second step is same handle the attributes
// third step is same append the element to the container that is injecting the element into the DOM
// there are some more optimizations in real react library like batching, reconciliation, virtual DOM etc.
// but the basic process is the same
// look at 16reactflow/main.jsx to see how react is actually used. In that file we have created a component and rendered it to the DOM.