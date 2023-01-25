import { MemeSVGViewer } from 'orsys-tjs-meme';
import { DummyMeme } from './interfaces/dummyMeme';
import React from 'react';
import './App.css';
import MemeForm from './components/feature/MemeForm/MemeForm';
import FlexHLayout from './components/layout/FlexHLayout/FlexHLayout';
import Header from './components/ui/Header/Header';
import Footer from './components/ui/Footer/Footer';


interface IAppState { }
interface IAppProps { }

class App extends React.PureComponent<IAppProps, IAppState> {
  render() {
    return (
      <div className="App">
        <Header/>
        <FlexHLayout>
          <MemeSVGViewer image={undefined} meme={DummyMeme} />
          <MemeForm />
        </FlexHLayout>
        <Footer/>
      </div>
    );
  }
}

export default App;
