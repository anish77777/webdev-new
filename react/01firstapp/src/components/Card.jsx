import React from 'react'
import './Card.css'
const Card = ({ title, desc }) => {
  return (
    <div className='card'>
    
      <img src="https://unsplash.com/photos/person-holding-phone-near-laptop-and-tablet-on-desk-7R3PqLcVnzQ" alt="" width={233} height={200}
       style={{backgroundColor: "red",border: "2px solid black"}}/>
      {/* you can either use width and height as js {} or as string "233px" */}
      {/* is js in width allow to put variable? yes */}
      {/* we can also use style as object outer bracket denote js and innner bracket 
      denote object */}
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}
// can i write props as tit and description here not desc?
// yes
// two ways to access props
// 1. props.title and props.desc
// props form an object like {title: "Card 1", desc: "Description of card 1"}
// so we can access props like this
// 2. title and desc
// this is called destructuring
export default Card
