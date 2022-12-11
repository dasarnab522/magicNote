import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from "react"
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type 
      })
      setTimeout(()=>{
        setAlert(null)
      },1000)
  }
  const toggleMode=()=>{
    if(mode ==='light'){
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark node enable","success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light node enable","success")
    }
  }
  return (
  <>
  <Router>
    <Navbar title="TextUtil" about="About us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text" mode={mode}/> }>
          </Route>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
      </Routes>
    </div>
  </Router>
  </>
  );
}

export default App;
