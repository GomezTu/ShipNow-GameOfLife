const initialState = {
  board: [],
  gameStatus: 'STOP',
  timerId: null,
  generations: 0,
  error: '',
  shouldRefresh: false,
  speed: 300,
  completedGame: false,
};

export default initialState;