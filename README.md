# React Video Background

React Video Background is a simple component of ReactJS which adds a full-screen video background to the web application with the mentioned source.

# Installation

```node
npx create-react-app my-react-app
cd my-react-app
npm i react-vid-background
```

# Usage

```react
import {ReactVideoBg as VBg} from 'react-vid-background';

function App() {
  return (
    <div className="App">
      <VBg
        vidSrc='https://example.com/path/to/video.mp4'
        muted={true|false}
        autoPlay={true|false}
        loop={true|false}
        opacity={0.5} {/*opacity in decimal from 0 to 1*/}
        backgroundColor={'#3c3c3c'} {/*hex code of the theme color*/}
      >
        <div>
          {/*
            conent which goes here is display:flex
            and displays at the center of the screen
          */}
        </div>
      </VBg>
    </div>
  );
}

export default App;
```

## Props

The component takes some props which define how the video is displayed.

- vidSrc: URL to the source of the video
- muted: Specifies if the video should be muted
- autoPlay: Specifies if the video should play as soon as the page loads
- backgroundColor: Sets the theme of the layer which blurs the video in the mentioned color
- opacity: Opacity of the theme layer which blurs the video with the mentioned theme color

# Contributing

Pull requests are welcome. The project can be expanded in many ways with much more features and bugs be squashed if they arise.
