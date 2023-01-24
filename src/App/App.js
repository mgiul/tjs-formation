import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  let counter = 0;
  return (
    <div className="App">
      Voici le nb de click : {counter}
      <hr />
      <Button onButtonClick={() => { 
        counter--;
        console.log(counter); 
        }}>Click -1</Button>
      <Button>Click +1</Button>

    </div>
  );
}

export default App;
