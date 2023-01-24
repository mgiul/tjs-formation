import React from 'react';
import './App.css';
import MemeForm from './components/feature/MemeForm/MemeForm';
import FlexHLayout from './components/layout/FlexHLayout/FlexHLayout';
import MemeSvgViewer from './components/ui/MemeSvgViewer/MemeSvgViewer';

interface IAppState { }
interface IAppProps { }

class App extends React.PureComponent<IAppProps, IAppState> {
  render() {
    return (
      <div className="App">
        <FlexHLayout>
          <MemeSvgViewer/>
          <MemeForm/>
        </FlexHLayout>
      </div>
    );
  }
}

export default App;
