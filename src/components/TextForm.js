import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        //console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=>{
        //console.log("Uppercase was clicked");
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event)=>{
        //console.log("On Changed");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'#6c757d':'white',color:props.mode === 'dark'?'white':'black'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h2>Words Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something"}</p>
    </div>
    </>
    
  )
}
