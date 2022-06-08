import React, {useState} from "react";

export default function Textform(props) {
    const handleUpClick = ()=> {
        // console.log('Uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=> {
        // console.log('Uppercase was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=> {
        // console.log('Uppercase was clicked' + text);
        let newText = '';
        setText(newText)
    }
    const handleOnChange = (event)=> {
        // console.log('On Change');
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container">

        <h1>{props.heading}</h1>
      <div className="mb my-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="MainBox" rows={12}></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );    
}

