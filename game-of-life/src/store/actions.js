import * as types from '../constants/actionTypes';
import { makeGrid, makeRandomGrid } from '../shared/utils/utils';

export const toggleCell = (x, y) => ({
  type: types.TOGGLE_CELL,
  payload: {x: x, y: y},
});

export const setPlay = (id) => ({
  type: types.PLAY_GAME,
  payload: id,
});

export const setPause = () => ({
  type: types.PAUSE_GAME,
});

export const raiseError = (err) => ({
  type: types.RAISE_ERROR,
  payload: err,
});

export const takeStep = () => ({
  type: types.STEP,
});

export const recoverBoard = (value) => ({
  type: types.RECOVER_BOARD,
  payload: value
});

export const changeSpeed = (speed) => ({
  type: types.CHANGE_SPEED,
  payload: speed,
});

//STOP GAME
const stopGameAction = (board) => ({
  type: types.STOP_GAME,
  payload: board,
});

export const setStop = (height, width) => (dispatch) => {
  const board = makeGrid(height, width);
  dispatch(stopGameAction(board));
};

//INIT GAME
const initGameAction = (board) => ({
  type: types.INIT_GAME,
  payload: board,
});

export const initGame = (height, width) => (dispatch) => {
  const board = makeGrid(height, width);
  dispatch(initGameAction(board));
};

//SEED GAME
const seedGameAction = (board) => ({
  type: types.SEED,
  payload: board,
});

export const seedGame = (height, width) => (dispatch) => {
  let board = makeGrid(height, width);
  board = makeRandomGrid(board);
  dispatch(seedGameAction(board));
};