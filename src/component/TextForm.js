import { useState } from "react"
import React from 'react'

export default function TextForm(props) {
const [text, setText] = useState("")
const [btn, setbtn] = useState("Change to Upper")
const changeText=()=>{
    if(btn === "Change to Upper"){
        let temp=text.toUpperCase();
        setText(temp)
        setbtn("Change to Lower")
        props.showAlert("Converted to uppercase","success")
    }
    else{
        let temp=text.toLowerCase();
        setText(temp)
        setbtn("Change to Upper") 
        props.showAlert("Converted to lowercase","success")
    }
}
const clear=()=>{
    setText("")
    props.showAlert("Text clear","success")
}
const upChange=(event)=>{
    setText(event.target.value)
}
const copyText=()=>{
    navigator.clipboard.writeText(text)
    props.showAlert("Save in clipbord","success")
}
const removeSpace=()=>{
    let newTet = text.split(/[ ]+/)
    setText(newTet.join(" "))
    props.showAlert("Extra space remove","success")
}
const wordCount=()=>{
    if(text.length>0)
        return text.trim().split(/\s+/).length;
    else
        return 0;
}
  return (
<>    
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?
            '#13466e':'white',color: props.mode==='dark'?'white':'black'}} 
            onChange={upChange} id="myBox" rows="5" placeholder="Enter Text"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={changeText}>{btn}</button>
        <button className="btn btn-primary mx-2 my 2" onClick={copyText}>Copy All</button>
        <button className="btn btn-primary mx-2 my-2" onClick={removeSpace}>Remove Space</button>
        <button className="btn btn-primary mx-2 my-2" onClick={clear}>Clear</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{wordCount()} words and {text.length} charecters</p>
        <p>{0.008 * wordCount()} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
</>    
  )
}
