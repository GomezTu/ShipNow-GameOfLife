import App from './App';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleCell,
setPlay,
setPause,
setStop,
raiseError,
seedGame,
initGame,
takeStep,
changeSpeed,
recoverBoard } from "./store/actions";

const mapStateToProps = (state) => {
  return({
    error: state.app.error,
    gameStatus: state.app.gameStatus,
    generations: state.app.generations,
    board: state.app.board,
    stateChange: state.app.stateChange,
    timerId: state.app.timerId,
    speed: state.app.speed,
  });
};

const dispatchActionsToProps = (dispatch) => {
  return bindActionCreators(
    {
      // Actions
      toggleCell,
      setPlay,
      setPause,
      setStop,
      raiseError,
      seedGame,
      initGame,
      takeStep,
      changeSpeed,
      recoverBoard,
    },
    dispatch
  );
}

export default connect(mapStateToProps, dispatchActionsToProps)(App);