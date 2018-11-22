import React, { Component } from 'react';
import _ from 'lodash';
import Alert from './shared/components/Alert/Alert';
import ErrorBoundary from "./shared/components/ErrorBoundary/ErrorBoundary";
import ButtonsBoard from "./shared/components/ButtonsBoard/ButtonsBoard";
import Grid from "./shared/components/Grid/Grid";
import { buttons } from "./constants/shared";
import { defaultHeight, defaultWidth } from "./constants/shared";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const { board, error, generations } = this.props;

    this.state = {
      board: board,
      error: error,
      generations: generations
    };

    this.actions = {
      'play': this.startGame,
      'stop': (id) => this.stopGame(id),
      'pause':(id) => this.pauseGame(id),
      'seed': () => this.props.seedGame(defaultWidth, defaultHeight),
      'step': this.props.takeStep,
      'slow': this.slowDown,
      'speed': this.speedUp,
      'recover': this.recoverBoard,
    };
  }
  
  componentDidMount() {
    this.props.initGame(defaultWidth, defaultHeight);
  }

  componentWillReceiveProps(newProps) {
    const { board, error, shouldRefresh, completedGame, generations } = newProps;
    if (
      ((shouldRefresh === this.props.shouldRefresh) &&
      _.isEqual(error, this.props.error)) || completedGame
    ) return;
    this.setState({
      board,
      error,
      generations,
    });
  }

  startGame = (speed = 0) => {
    if (this.props.timerId > 0) clearInterval(this.props.timerId);
    if (this.props.gameStatus === 'STOP') this.seedGame();
    const interval = setInterval(this.props.takeStep, (this.props.speed - speed));
    this.props.setPlay(interval);
  }

  pauseGame = (id) => {
    clearInterval(id);
    this.props.setPause();
  }

  stopGame = (id) => {
    clearInterval(id);
    this.props.setStop(defaultWidth, defaultHeight);
  }

  recoverBoard = () => {
    if (localStorage.getItem('board')) {
      let recValue = {};
      recValue.board = JSON.parse(localStorage.getItem('board'));
      recValue.gens = parseInt(localStorage.getItem('gens'));
      this.props.recoverBoard(recValue);
    }
  }

  speedUp = () => {
    this.props.changeSpeed(this.props.speed - 50);
    this.startGame(50);
  }

  slowDown = () => {
    this.props.changeSpeed(this.props.speed + 50);
    this.startGame(-50);
  }

  seedGame = () => {
    this.props.seedGame(defaultWidth, defaultHeight);
  }
  
  render() {
    const { raiseError, toggleCell, gameStatus, timerId, completedGame } = this.props;

    return (
      <div className='col justify-content-center'>
        <ErrorBoundary error={this.state.error} raiseError={raiseError}>
        <ButtonsBoard
          buttons={buttons}
          timerId={timerId}
          gameStatus={gameStatus}
          generations={this.state.generations}
          actions={this.actions} />
        <Grid board={this.state.board} toggleCell={toggleCell} />
      </ErrorBoundary>
      {
        //Decided for a simple and 'dumb' component to notify the user the end of the game
        completedGame && (
          <Alert style={{
            position: 'absolute',
            top: '50%',
            left: '25%',
            }} message={`Game Finished on ${this.state.generations + 1} generations`}/>
        )
      }
      </div>
    );
  }
}

export default App;
