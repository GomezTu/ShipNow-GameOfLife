import React from 'react';
import Cell from '../Cell/Cell';

const Grid = (props) => (
    <table>
      <tbody>
        {props.board.map((row,i) =>
          <tr key={i}> {row.map((cell,j) =>
              <Cell
                key={j}
                alive={cell}
                handleClick={() => props.toggleCell(i,j)}
                  />)}
          </tr> )}
      </tbody>
    </table>
);

export default Grid;