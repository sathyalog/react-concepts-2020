import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Greet/>
      <Greeting />
    </div>
  );
}

export default App;
