import React from 'react';
import './App.css';
import AppRouting from "./Routes/AppRouting";
import Nav from "./Components/NavBar/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <AppRouting />
    </div>
  );
}

export default App;
