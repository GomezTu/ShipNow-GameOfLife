import initialState from "./initialState";
import * as types from '../constants/actionTypes';
import { advanceStep } from '../shared/utils/utils';

export default (state = initialState, action) => {

  let newBoard = [];

  switch(action.type) {
    case types.INIT_GAME:
      return { ...state, board: action.payload, stateChange: !state.stateChange };
    case types.CLEAR_GAME:
      return { ...state, gameStatus: 'STOP', generations: 0 };
      case types.STOP_GAME:
      return { ...state, gameStatus: 'STOP', generations: 0, board: action.payload, stateChange: !state.stateChange };
    case types.PAUSE_GAME:
      return { ...state, gameStatus: 'PAUSE' };
    case types.PLAY_GAME:
      return { ...state, timerId: action.payload, gameStatus: 'PLAY' };
    case types.RAISE_ERROR:
      return { ...state, error: action.payload, generations: 0 };
    case types.SEED:
      return { ...state, board: action.payload, stateChange: !state.stateChange, generations: 0, gameStatus: 'PAUSE' };
    case types.STEP:
      newBoard = advanceStep(state.board);
      localStorage.setItem('board', JSON.stringify(newBoard));
      localStorage.setItem('gens', JSON.stringify(state.generations + 1));
      return { ...state, generations: state.generations + 1, board: newBoard, stateChange: !state.stateChange };
    case types.CHANGE_SPEED:
      return { ...state, speed: action.payload };
    case types.TOGGLE_CELL:
      newBoard = state.board;
      newBoard[action.payload.x][action.payload.y] = !newBoard[action.payload.x][action.payload.y];
      if (state.gameStatus !== 'STOP') localStorage.setItem('board', JSON.stringify(newBoard));
      if (state.gameStatus === 'STOP') localStorage.setItem('gens', JSON.stringify(0));
      return { ...state, board: newBoard, stateChange: !state.stateChange, gameStatus: 'PAUSE' };
    case types.RECOVER_BOARD:
      return { ...state, board: action.payload.board, stateChange: !state.stateChange, generations: action.payload.gens, gameStatus: 'PAUSE' };
    default:
      return { ...state };
  }

}