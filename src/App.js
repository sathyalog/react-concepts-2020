import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Greeting from './components/Greeting';
import WithJSX from './components/WithJSX';
import WithoutJSX from './components/WithoutJSX';

function App() {
  return (
    <div className="App">
      <Greet/>
      <Greeting />
      <WithJSX/>
      <WithoutJSX/>
    </div>
  );
}

export default App;
