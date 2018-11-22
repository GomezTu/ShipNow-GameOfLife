export const makeGrid = (r, c) => {
  return Array(r).fill().map(()=>Array(c).fill(!!0));
};

export const makeRandomGrid = (grid) => {
  let newBoard = [];
  grid.map((row, idy) => {
    let r = [];
    row.map((c, idx) => { r.push(Math.floor(Math.random() * 4) === 1); });
    newBoard.push(r);
    });
    return newBoard;
}

export const advanceStep = (grid = []) => {
  let newBoard = [];
  grid.map((row, idy) => {
    let r = [];
    row.map((c, idx) => {
      const isAlive = c;
      const amountOfNeighbours = calculateNeighbours(idy, idx, grid);

      if (
          (isAlive && (amountOfNeighbours < 2 || amountOfNeighbours > 3)) ||
          (!isAlive && amountOfNeighbours === 3)
        ) {
          r.push(!c); 
        }
      if (
          (isAlive && (amountOfNeighbours === 3 || amountOfNeighbours === 2 )) ||
          (!isAlive && amountOfNeighbours !== 3 )
        ) {
          r.push(c);
        }
      });
      newBoard.push(r);
    });
    return newBoard;
};

export const calculateNeighbours = (x, y, grid) => {
  const gridHeight = grid.length;
  const gridWidth = grid[0].length;

  const topRow = x-1 < 0 ? (gridHeight - 1) : x-1;
  const bottomRow = (x+1 === gridHeight) ? 0 : x+1;
  const leftColumn = y-1 < 0 ? (gridWidth - 1) : y-1;
  const rightColumn = (y+1 === gridWidth) ? 0 : y+1;

  let total = 0;

  // top row neighbours
  total += grid[topRow][leftColumn];
  total += grid[topRow][y];
  total += grid[topRow][rightColumn];

  // row neighbours
  total += grid[x][leftColumn];
  total += grid[x][rightColumn];

  //bottom row neighbours
  total += grid[bottomRow][leftColumn];
  total += grid[bottomRow][y];
  total += grid[bottomRow][rightColumn];

  return total;
};

export const validateBoard = (grid) => {
  let arr = [];

  grid.map(r => {
    arr.push(r.reduce((sum, c) => sum || c));
  });

  return arr.reduce((sum, r) => sum || r);
}