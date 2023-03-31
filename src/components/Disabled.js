import React from "react";
import {useState} from 'react';

export default function Disabled(props)  {     

    const [text, setText] = useState('');

    const [condition, setCondition] = useState(false);
    
    const helloFunction=(event1)=> {
        document.getElementById("hello").disabled = condition;
        setTimeout(() => {setCondition(true)}, 90000);
        setText(event1.target.value)
    }

    return (
        <>
            <div className={`text-${props.mode === 'light'?'dark':'light'}`}>
                <h3>Start writing to get your typing speed!</h3>
                <textarea className="form-control my-4" id="hello" value={text} placeholder="write here...." onChange={helloFunction} rows="6"/>
                <p>{text.length>0? text.split(" ").length:0} words</p>
                {/* <h4>Your typing speed is {(text.split(" ").length)/1.5} WPM</h4> */}

                <h4>Your typing speed is {(text.length>0? text.split(" ").length:0)/1.5} WPM</h4>
            </div>
        </>
    )
}