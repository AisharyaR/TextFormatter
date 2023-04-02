import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';
import Disabled from './components/Disabled';
import React, {useState} from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const[mode, setMode] = useState('white');

  const toggleBlueMode = ()=>{
    if(mode === 'white')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#18325c';
      showAlert(" Blue mode has been enabled", "success");
      // document.title = 'Text Formatter - Blue Mode';

      // setInterval(() => {
      //   document.title = 'Text Formatter is amazing';
      // }, 2000)

      // setInterval(() => {
      //   document.title = 'Install Text Formatter now';
      // }, 1500)
    }
    else if (mode === 'dark')
    {
      setMode('white');
      document.body.style.backgroundColor = 'white';
      showAlert("White mode has been enabled", "success");
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor = '#18325c';
      showAlert("Blue mode has been enabled", "success");
    }
  }


  const toggleGreenMode = ()=>{
    if(mode === 'white')
    {
      setMode('green');
      document.body.style.backgroundColor = '#1e3c1e';
      showAlert("Green mode has been enabled", "success");
    }
    else if (mode === 'green')
    {
      setMode('white');
      document.body.style.backgroundColor = 'white';
      showAlert("White mode has been enabled", "success");
    }
    else
    {
      setMode('green');
      document.body.style.backgroundColor = '#1e3c1e';
      showAlert("Green mode has been enabled", "success");
    }
  }


  const toggleRedMode = ()=>{
    if(mode === 'white')
    {
      setMode('red');
      document.body.style.backgroundColor = '#853232';
      showAlert("Red mode has been enabled", "success");
      
    }
    else if (mode === 'red')
    {
      setMode('white');
      document.body.style.backgroundColor = 'white';
      showAlert("White mode has been enabled", "success");
    }
    else
    {
      setMode('red');
      document.body.style.backgroundColor = '#853232';
      showAlert("Red mode has been enabled", "success");
    }
  }

  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {setAlert(null)}, 3000);
  }

  return <>
    {/* <BrowserRouter> */}
      <Navbar title = "Text Formatter" mode={mode} toggleBlueMode={toggleBlueMode} toggleGreenMode={toggleGreenMode} toggleRedMode={toggleRedMode}/>
      <Alert alert={alert}/>
      <div className = "container my-3">
        <TextForm heading = "Enter your text below" mode={mode} showAlert={showAlert}/>
        <AboutUs />
        <Disabled />
        {/* <Routes>
          <Route path="/" element={<TextForm heading = "Enter your text below" mode={mode} showAlert={showAlert}/>}/>
          <Route path="/AboutUs" element={<AboutUs />}/>
          <Route path="/Disabled" element={<Disabled />}/>
        </Routes> */}
      </div>
    {/* </BrowserRouter> */}
  </>
}

export default App;