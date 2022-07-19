//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
//import About from './Components/About';

//import {
  // BrowserRouter as Router,
  //Switch,
  //Route
//} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'MidnightBlue';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light'); 
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    {/*<Router>*/}
      {/*<Navbar title="Textutils" utilsHome="Home" aboutText="About Us" mode={mode}
      toggleMode={toggleMode}/>*/}
      <Navbar title="Textutils"  mode={mode} toggleMode={toggleMode}/>
      
      <Alert alert={alert}/>
      <div className='container my-3'>
      {/*<Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">*/}
          <Textform showAlert={showAlert} heading="Enter your Text Below" mode={mode}/>
          {/*</Route>
        </Switch>*/}
       
      </div>
      {/*</Router>*/}
    </>
  );
}

export default App;
