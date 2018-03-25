import React, { Component } from 'react';

import './App.css';
import Wrapper from "./components/Wrapper";
import MyNav from './components/Nav';
import MyJumbotron from './components/Jumbotron';
import sports from './sports.json';
import SportCard from './components/SportCard';

class App extends Component {
  render() {
    return <div className="App">
        <MyNav />
        <MyJumbotron />
        <Wrapper>
            {
              sports.map( sport =>
                <SportCard image={sport.image} />)
            }
        </Wrapper>
      </div>;
  }
}

export default App;
