import React, {useState} from 'react'
export default function Textform(props) {
    const handleUpClick = ()=> {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Coverted to Uppercaser!", "success")
    }

    const handleLowClick = ()=> {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Coverted to Lowercaser!", "success")
    }

    const handleOnChange = (event) => {
        //console.log("On Change");
        setText(event.target.value)
    }

    const handleCopy = ()=> {
        var text =  document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied!", "success")
    }

   

    const handleExtarSpaces = () => {
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extraspaces removed!", "success")
    }

    const handleClear = ( ) => {
        let newText= '';      
        setText(newText)
        props.showAlert("Text cleared!", "success")      
    }       
            
    const [text, setText] = useState('');
  return ( 
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>To Uppercase</button>
<button disabled={text.length===0}  className="btn btn-primary my-1 mx-1" onClick={handleLowClick}>To Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleExtarSpaces}>Remove Extraspaces</button>
<button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleClear}>Clear Text</button>
<div className="container">
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s+/).filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>           
</div>
</div>
  )
}

