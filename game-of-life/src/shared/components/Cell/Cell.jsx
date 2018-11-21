import React from 'react';
import './cell.css';

const Cell = ({alive, handleClick}) => (
  <td>
    <div onClick={handleClick}
    className={`cell ${alive ? 'alive' : 'dead'}`} />
  </td>
);

export default Cell;