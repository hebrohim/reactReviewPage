import React, { useState } from 'react'
import { BiChevronRight,BiChevronLeft } from "react-icons/bi";

const Review = ({Reviews}) => {
const [index, setindex] = useState(0);
let {id,name,job,image,text} = Reviews[index]
console.log(id,name,job)
  return (
    <div className='reviewContainer'>
        <img id = "image" src={image} alt ={name}/>
        <h4 id='author'>{name}</h4>
        <p id='jobTitle'>{job}</p>
        <p id='info'>{text}</p>

<div style={{display:"flex"}}>
        <span id='previousBtn'><BiChevronLeft/></span>
        <span id='nextBtn'><BiChevronRight/></span>
        </div>

        <button id = "randomBtn">Random</button>
    </div>
  )
}

export default Review