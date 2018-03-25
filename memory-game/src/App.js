import React, { Component } from 'react';

import './App.css';
import Wrapper from "./components/Wrapper";
import MyNav from './components/Nav';
import MyJumbotron from './components/Jumbotron';
import sports from "./sports.json";
import SportCard from './components/SportCard';

class App extends Component {

  render() {
    return <div className="App">
        <MyNav />
        <MyJumbotron />
        <Wrapper>
          <SportCard image={sports[0].image} />
          <SportCard image={sports[1].image} />
          <SportCard image={sports[2].image} />
          <SportCard image={sports[3].image} />
          <SportCard image={sports[4].image} />
          <SportCard image={sports[5].image} />
          <SportCard image={sports[6].image} />
          <SportCard image={sports[7].image} />
          <SportCard image={sports[8].image} />
          <SportCard image={sports[9].image} />
        </Wrapper>
      </div>;
  }
}

export default App;
