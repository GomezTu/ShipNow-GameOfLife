import _ from 'lodash';
import { makeGrid,
  makeRandomGrid,
  advanceStep,
  calculateNeighbours,
  validateBoard } from './utils';

const mockGridRandom = [
  [false, false, false, true],
  [false, true, false, true],
  [true, false, true, true],
  [true, true, true, false],
  [false, false, true, true],
];

const mockGridOneTrue = [
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, true],
];

const mockGridAllFalse = [
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
];

const defaultHeight = 5;
const defaultWidth = 4;
let obj = null;
let expected = null;

describe('makeGrid', () => {
  it('Should return an 2D Array with all falsy values', () => {
    obj = makeGrid(defaultHeight, defaultWidth);
    expected = mockGridAllFalse;
    expect(obj).toEqual(expected);
    expect(obj.length).toEqual(expected.length);
    expect(obj[0].length).toEqual(expected[0].length);
  });
});

describe('makeRandomGrid', () => {
  it('Should take a valid 2D Array as input and return a new array with the same lengths', () => {
    obj = mockGridAllFalse;
    const newObj = makeRandomGrid(obj);
    expect(obj.length).toEqual(newObj.length);
    expect(obj[0].length).toEqual(newObj[0].length);
  });
});

describe('advanceStep', () => {
  it('Should handle a falsy 2D Array and return the very same 2D Array', () => {
    obj = advanceStep(mockGridAllFalse);
    expected = mockGridAllFalse
    expect(_.isEqual(obj, expected)).toBe(true);
  });

  it('Should handle a non falsy 2D Array and return a different 2D Array', () => {
    obj = advanceStep(mockGridRandom);
    expected = mockGridRandom
    expect(_.isEqual(obj, expected)).toBe(false);
  });
});

describe('calculateNeighbours', () => {
  it('Should return all 5 neighbours', () => {
    obj = calculateNeighbours(2, 2, mockGridRandom);
    expected = 5;
    expect(obj).toEqual(expected);
  });

  it('Should consider neighbours from the ther side of the board', () => {
    obj = calculateNeighbours(4, 3, mockGridRandom);
    expected = 4;
    expect(obj).toEqual(expected);
  });
});

describe('validateBoard', () => {
  it('Should return true when the 2D array contains at least one truthy value', () => {
    expected = true;
    obj = validateBoard(mockGridRandom);
    expect(obj).toEqual(expected);
    obj = validateBoard(mockGridOneTrue);
    expect(obj).toEqual(expected);
  });

  it('Should return false when the 2D array contains all falsy values', () => {
    expected = false;
    obj = validateBoard(mockGridAllFalse);
    expect(obj).toEqual(expected);
  });

});