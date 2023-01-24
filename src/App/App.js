import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button';

class App extends React.PureComponent {
  counter = 0;
  render() {

    return (
      <div className="App">
        Voici le nb de click : {this.counter}
        <hr />
        <Button onButtonClick={() => {
          this.counter--;
          console.log(this.counter);
          this.forceUpdate();
        }}>Click -1</Button>
        <Button>Click +1</Button>

      </div>
    );
  }
}

// function App() {
//   let counter = 0;
//   return (
//     <div className="App">
//       Voici le nb de click : {counter}
//       <hr />
//       <Button onButtonClick={() => { 
//         counter--;
//         console.log(counter); 
//         }}>Click -1</Button>
//       <Button>Click +1</Button>

//     </div>
//   );
// }

export default App;
