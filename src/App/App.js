import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <div className="App">
      DEMAT BREIZH
      <hr/>
      <Button>Cliquez<br /> ici !</Button>
      <Button><div>Cancel<br/>ag</div></Button>
      <Button>Ok</Button>
      <Button>Hello</Button>
      <Button children="Hello"/>
    </div>
  );
}

export default App;
