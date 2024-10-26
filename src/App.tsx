import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      
      <Router>
    
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<SignIn />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
