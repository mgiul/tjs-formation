import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button';

class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidUpdate() {
    console.log('Après le changement effectif de l\'état', this.state.counter);
    console.log(arguments); // voir les arguments de la fonction
  }

  render() {
    return (
      <div className="App">
        Voici le nb de click : {this.state.counter}
        <hr />
        <Button onButtonClick={() => {
          this.setState({ counter: this.state.counter - 1 });
          // Retard de un car setstate est async
          // console.log(this.state.counter);
        }}
          style={{ backgroundColor: "steelblue" }}>
          Click -1</Button>
        <Button style={{ backgroundColor: "tomato", color: "red" }}>Click +1</Button>
        <br />
        <Button onButtonClick={() => { this.setState({ counter: 0 }) }}>Reset counter</Button>
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
