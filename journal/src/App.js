import React from 'react';
import './App.css';
import AppRouting from './components/Routes/AppRouting';
import Nav from './components/Login/NavBar';

function App() {

  return (
    <div className="App">
      <Nav />
      <AppRouting />
      
    </div>
  );
}

export default App;
