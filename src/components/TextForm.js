import React, {useState} from 'react'

export default function TextForm(props)  {

    const handleUpClick = ()=>{
        let changed = text.toUpperCase();
        setText(changed);
        props.showAlert(" Converted to Upper Case", "success");
    }

    const handleDownClick = ()=>{
        let changed = text.toLowerCase();
        setText(changed);
        props.showAlert(" Converted to Lower Case", "success");
    }

    const handleReverseClick = ()=>{
        let reverse = "", changed;
        for (let i = 0; i < text.length; i++)
        {
            changed = text.charAt(i);
            reverse = changed + reverse;
        }
        setText(reverse);
        props.showAlert(" Word has been reversed", "success");
    }

    const handleFindClick = ()=>{
        if(text.includes(find))
        props.showAlert(" Word found", "success");
        else
        props.showAlert(" Word not found", "danger");
    }
    
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert(" Word has been spoken", "success");
      }      
      
      const handleClearClick = ()=>{
        setText(""); result("");
        props.showAlert(" Cleared", "success");
    }

      // TO BE ABLE TO TYPE
      const handleOnChange = (event1)=>{
          setText(event1.target.value)
        }

      const handleFindChange = (event2)=>{
          result(event2.target.value)
        }
      
      const [text, setText] = useState('');
      const [find, result] = useState('');


    return (
        <>
            <div className="container">
                <h4 className={`text-${props.mode === 'white'?'dark':'white'}`}>{props.heading}</h4>
                
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="maintext" rows="10" style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
                </div>

                <button className="btn btn-success mx-3 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-success mx-3 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-success mx-3 my-1" onClick={speak}>Speak</button>
                <button className="btn btn-success mx-3 my-1" onClick={handleReverseClick}>Reverse</button>
                <button className="btn btn-warning mx-3 my-1" onClick={handleFindClick}>Find</button>
                <button className="btn btn-danger mx-3 my-1" onClick={handleClearClick}>Clear</button>

            </div>
            <div className={`container my-3 text-${props.mode === 'white'?'dark':'white'}`}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>You can read this text in about {0.008 * text.split(" ").length}</p>
                <h2>Preview</h2>
                <p>{text.length>0? text:"Enter something in the textbox above to preview it here"}</p>
            </div>

            <div className={`container text-${props.mode === 'white'?'dark':'white'}`}>
                <h5>Write the word you would like to find</h5>
                <div className="mb-3">
                    <textarea className="form-control" value={find} onChange={handleFindChange} id="findtext" rows="1"></textarea>
                </div>
            </div>
        </>
    )
}