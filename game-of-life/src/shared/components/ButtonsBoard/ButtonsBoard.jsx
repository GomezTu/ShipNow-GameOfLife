import React from 'react';
import CustomButton from "../Button/Button";

const ButtonsBoard = (props) => {
  const buttons = props.buttons.map((b, idx) => {
    const enableIf = !(b.enableIf && b.enableIf[props.gameStatus]);
      return (
        <CustomButton
          disabled={enableIf}
          key={idx}
          timerId={props.timerId}
          {...b}
          handleClick={props.actions[b.name]} />
      );
  });

  const { generations } = props;

  return(
    <div className='row align-items-center'
      style={{ marginBottom: '20px' }}>
      <div className='col-7'>
        {buttons}
      </div>
      <div className='col-2 float-right'>
        <span className='float-right' style={{ paddingRight: '15px' }}>
        Generations: {generations ? generations : '#-'}
        </span>
      </div>
    </div>
  );
}

export default ButtonsBoard;