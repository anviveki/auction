import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './pages/login';

import Signup from './pages/signup';

function App() {
  return (
    <Router>
      <div className="App min-w-screen min-h-screen p-0 m-0">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;