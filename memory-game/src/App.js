import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import MyNav from './components/Nav';
import MyJumbotron from './components/Jumbotron';
import MyPanel from "./components/Panel";
import sports from './sports.json';
import SportCard from './components/SportCard';

class App extends Component {
// state initialization
  state = {
    message: "Click an Image to Begin",
    score: 0,
    topScore: 0,
    savedClickedId: [],
    sports
  };

  // When a sport card is clicked, it is removed from the list of sports
  handleImageClick = event => {
    const currentSport = event.target.alt;
    const matchedId = this.state.savedClickedId.indexOf(currentSport) > -1;

    // Once you clicked on a matchedId sport card, your score is reset to 0, and cards are reshuffle
    if (matchedId) {
      this.setState({ 
        sports: this.state.sports.sort(function(a, b) {
          return 0.5 - Math.random();
        }), 
        savedClickedId: [], 
        score: 0, 
        message: "You guessed incorrectly!" 
      });
    // if you clicked on an unmatchedId sport card, score is incremented and cards are reshuffle
    } else {
      this.setState({
          sports: this.state.sports.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          savedClickedId: this.state.savedClickedId.concat(currentSport),
          score: this.state.score + 1,
          topScore: this.state.topScore + 1,
          message: "You guessed correctly!"
        },
        // once you get all the 12 cards correctly, the game restart
        () => {
          if (this.state.score === 12) {
            alert("You Win! Congratulations");
            this.setState({
              sports: this.state.sports.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              savedClickedId: [],
              score: 0,
              topScore: 0
            });
          }
        }
      );
    }
  };

  render() {
    return <div className="App">
        <MyNav message={this.state.message} score={this.state.score} topScore={this.state.topScore} />
        <MyJumbotron />
        <Wrapper>
          {this.state.sports.map(sport =>
            <SportCard
              {...sport}
              handleImageClick={this.handleImageClick}
            />
          )}
        </Wrapper>
        <MyPanel />
      </div>;
  }
}

export default App;
