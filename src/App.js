import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Greeting from './components/Greeting';
import WithJSX from './components/WithJSX';
import WithoutJSX from './components/WithoutJSX';
import Message from './components/Message';
import Counter from './components/Counter';
import ClickHandler from './components/ClickHandler';

function App() {
  return (
    <div className="App">
      <Greeting name='Sathya Vakacharla'>Class Component children props</Greeting>
      <WithJSX/>
      <WithoutJSX/>
      <Greet name='Sathya' nickname='Manu'>Functional Component children props</Greet>
      <Greet name='Narahari' nickname='Bijjala'/>
      <Message/>
      <Counter/>
      <ClickHandler/>
    </div>
  );
}

export default App;
