import { MemeSVGViewer, MemeInterface, ImageInterface } from "orsys-tjs-meme";
import { DummyMeme } from "./interfaces/dummyMeme";
import React from "react";
import "./App.css";
import MemeForm from "./components/feature/MemeForm/MemeForm";
import FlexHLayout from "./components/layout/FlexHLayout/FlexHLayout";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
interface IAppState { meme: MemeInterface, images: Array<ImageInterface> }
interface IAppProps { }

class App extends React.PureComponent<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)
    this.state = {
      meme: DummyMeme, images: [
        {
          id: 1,
          url: "look-rick.jpg",
          w: 1256,
          h: 670,
          name: "rock &amp; morty"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <FlexHLayout style={{ height: '89vh' }}>
          <MemeSVGViewer
            basePath="/img/meme/"
            image={this.state.images.find(e => e.id === this.state.meme.imageId)}
            meme={this.state.meme} />
          <MemeForm
            meme={this.state.meme}
            images={this.state.images}
            onMemeValueChange={(newMeme: MemeInterface) => {
              this.setState({ meme: newMeme })
            }
            } />
        </FlexHLayout>
        <Footer />
      </div>
    );
  }
}

export default App;
