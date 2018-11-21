export const boardSizes = [30, 50, 70];
export const cellStatus = ['dead', 'alive', 'neutral'];

// Game Initialization
export const defaultHeight = 50;
export const defaultWidth = 30;

// Buttons Configuration
export const buttons = [
  { id: 0,
    color: 'primary',
    size: 'md',
    title: 'Play',
    name: 'play',
    enableIf: {
      'STOP': true,
      'PAUSE': true,
      'PLAY': false,
    },
  },
  {
    id: 1,
    color: 'primary',
    size: 'md',
    title: 'Pause',
    name: 'pause',
    enableIf: {
      'STOP': false,
      'PAUSE': false,
      'PLAY': true,
    },
  },
  {
    id: 2,
    color: 'primary',
    size: 'md',
    title: 'Stop',
    name: 'stop',
    enableIf: {
      'STOP': false,
      'PAUSE': true,
      'PLAY': true,
    },
  },
  {
    id: 3,
    color: 'primary',
    size: 'md',
    title: 'Step',
    name: 'step',
    enableIf: {
      'STOP': false,
      'PAUSE': true,
      'PLAY': false,
    },
  },
  {
    id: 4,
    color: 'primary',
    size: 'md',
    title: 'Seed',
    name: 'seed',
    enableIf: {
      'STOP': true,
      'PAUSE': false,
      'PLAY': false,
    },
  },
  { id: 5,
    color: 'primary',
    size: 'md',
    title: 'Speed Up',
    name: 'speed',
    enableIf: {
      'STOP': false,
      'PAUSE': false,
      'PLAY': true,
    },
  },
  { id: 6,
    color: 'primary',
    size: 'md',
    title: 'Slow Down',
    name: 'slow',
    enableIf: {
      'STOP': false,
      'PAUSE': false,
      'PLAY': true,
    },
  },
  { id: 7,
    color: 'primary',
    size: 'md',
    title: 'Recover',
    name: 'recover',
    enableIf: {
      'STOP': true,
      'PAUSE': false,
      'PLAY': false,
    },
  },
];