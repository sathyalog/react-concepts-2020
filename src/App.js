import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet';
// import Greeting from './components/Greeting';
// import WithJSX from './components/WithJSX';
// import WithoutJSX from './components/WithoutJSX';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import ClickHandler from './components/ClickHandler';
// import ParentComponent from './components/ParentComponent';
// import StylingComponent from './components/StylingComponent'
// import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';
//import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FRParentInput from './components/FRParentInput';

function App() {
  return (
    <div className="App">
      <FRParentInput/>
      {/* <Greeting name='Sathya Vakacharla'>Class Component children props</Greeting>
      <WithJSX/>
      <WithoutJSX/>
      <Greet name='Sathya' nickname='Manu'>Functional Component children props</Greet>
      <Greet name='Narahari' nickname='Bijjala'/>
      <Message/>
      <Counter/>
      <ClickHandler/>
      <ParentComponent/>
      <StylingComponent primary={true}/>
      <Form/> 
      <LifecycleA/>
      <ParentComp/>
      <RefsDemo/> */}
    </div>
  );
}

export default App;
