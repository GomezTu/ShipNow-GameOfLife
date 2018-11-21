import React, { Component } from 'react';
import _ from 'lodash';
import ErrorBoundary from "./shared/components/ErrorBoundary/ErrorBoundary";
import ButtonsBoard from "./shared/components/ButtonsBoard/ButtonsBoard";
import Grid from "./shared/components/Grid/Grid";
import { buttons } from "./constants/shared";
import { defaultHeight, defaultWidth } from "./constants/shared";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const { board, error } = this.props;

    this.state = {
      board: board,
      error: error,
    };
  }
  
  componentDidMount() {
    this.props.initGame(defaultWidth, defaultHeight);
  }

  componentWillReceiveProps(newProps) {
    const { board, error, stateChange } = newProps;
    if (_.isEqual(stateChange, this.props.stateChange) &&
     (_.isEqual(error, this.props.error))) return;
    this.setState({
      board: board,
      error: error,
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

  stepGame = () => {
    this.props.takeStep();
  }

  recoverBoard = () => {
    let recValue = {};
    if (localStorage.getItem('board')) {
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
    const actions = {
      'play': this.startGame,
      'stop': (id) => this.stopGame(id),
      'pause':(id) => this.pauseGame(id),
      'seed': () => this.props.seedGame(defaultWidth, defaultHeight),
      'step': () => this.props.takeStep,
      'slow': this.slowDown,
      'speed': this.speedUp,
      'recover': this.recoverBoard,
    };
    
    const { raiseError, generations, toggleCell, gameStatus, timerId } = this.props;

    return (
      <div className='col justify-content-center'>
        <ErrorBoundary error={this.state.error} raiseError={raiseError}>
          <ButtonsBoard
            buttons={buttons}
            timerId={timerId}
            gameStatus={gameStatus}
            generations={generations}
            actions={actions} />
          <Grid board={this.state.board} toggleCell={toggleCell} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
