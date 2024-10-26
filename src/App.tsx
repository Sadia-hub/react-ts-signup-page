import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      
      <Router>
    
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
