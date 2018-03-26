import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import MyNav from './components/Nav';
import MyJumbotron from './components/Jumbotron';
import MyPanel from "./components/Panel";
import sports from './sports.json';
import SportCard from './components/SportCard';

class App extends Component {
  state = {
    message: "Click an Image to Begin",
    score: 0,
    topScore: 0,
    savedClickedId: new Array(sports.length)
  };

  handleImageClick = event => {
    const matchedId = this.state.savedClickedId[event.target.id - 1];
    if (matchedId === undefined) {
        this.setState({
          savedClickedId: sports.filter(sport => sport.id === event.target.id -1),
          message: "You guessed correctly!",
          score: this.state.score + 1,
          topScore: this.state.topScore + 1
        });
        sports.sort(function(a, b) {
          return 0.5 - Math.random();
        });
    } else {
        this.setState({
          message: "You guessed incorrectly!",
          topScore:
            this.state.score > this.state.topScore
              ? this.state.score
              : this.state.topScore,
          score: 0
        });
    }
  };

  render() {
    return (
      <div className="App">
        <MyNav
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <MyJumbotron />
        <Wrapper>
          {sports.map(sport =>
            <SportCard {...sport} onClick={this.handleImageClick} />
          )}
        </Wrapper>
      </div>
    );
  }
}

export default App;
