import React, { useState } from 'react'
import { BiChevronRight,BiChevronLeft } from "react-icons/bi";
import { FaQuoteRight } from "react-icons/fa";
const Review = ({Reviews}) => {
const [index, setindex] = useState(0);
let {id,name,job,image,text} = Reviews[index]
// console.log(id,name,job)
const next = () =>{
  var add = index + 1
  setindex(add)
  if ( index >= Reviews.length - 1) {
  setindex(0)
}
}

const previous = () =>{
  setindex(index - 1)
  if ( index <= 0) {
   setindex(Reviews.length - 1)
    }
}


  return (
    <div className='reviewContainer'>
      <span id='quote'><FaQuoteRight /></span>
       <div> <img id = "image" src={image} alt ={name}/></div>
        <h4 id='author'>{name}</h4>
        <p id='jobTitle'>{job}</p>
        <p id='info'>{text}</p>

<div style={{display:"flex"}}>
        <button id='previousBtn' onClick={previous}><BiChevronLeft/></button>
        <button id='nextBtn' onClick={next}><BiChevronRight/></button>
        </div>

        <button id = "randomBtn">Random</button>
    </div>
  )
}

export default Review