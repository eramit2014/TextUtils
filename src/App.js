import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link,Routes } from 'react-router-dom'; // Consolidated imports

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils Light Mode';
    }
  };

  const colorChange = () => {
    document.body.style.backgroundColor = 'green';
  };

  return (
    <>
     <Router>
      <div className="container my-3">
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} colorChange={colorChange} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
