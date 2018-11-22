import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import ButtonsBoard from './ButtonsBoard';
import CustomButton from '../Button/Button';
import { buttons } from '../../../constants/shared'

describe('ButtonBoard', () => {

  const timerId = 5;
  const gameStatus = 'PLAY';
  const generations = 3;
  const mockStartGame = spy();
  const mockStopGame = spy();
  const mockPauseGame = spy();
  const mockSeedGame = spy();
  const mockTakeStep = spy();
  const mockSlowDown = spy();
  const mockSpeedUp = spy();
  const mockRecoverBoard = spy();

  const actions = {
    'play': mockStartGame,
    'stop': (id) => mockStopGame(id),
    'pause':(id) => mockPauseGame(id),
    'seed': mockSeedGame,
    'step': mockTakeStep,
    'slow': mockSlowDown,
    'speed': mockSpeedUp,
    'recover': mockRecoverBoard,
  };

  const board = shallow(
    <ButtonsBoard
      buttons={buttons}
      timerId={timerId}
      gameStatus={gameStatus}
      generations={generations}
      actions={actions} />
  );

  it('Should render properly all buttons', () => {
    const btns = board.find(CustomButton);
    expect(btns.length).toEqual(buttons.length);
  });

  it('Should react to button click', () => {
    board.find({id: 0}).props().handleClick();
    board.find({id: 1}).props().handleClick();
    board.find({id: 2}).props().handleClick();
    board.find({id: 3}).props().handleClick();
    board.find({id: 4}).props().handleClick();
    board.find({id: 5}).props().handleClick();
    board.find({id: 6}).props().handleClick();
    board.find({id: 7}).props().handleClick();

    expect(mockStartGame.called).toBe(true);
    expect(mockPauseGame.called).toBe(true);
    expect(mockRecoverBoard.called).toBe(true);
    expect(mockSeedGame.called).toBe(true);
    expect(mockSlowDown.called).toBe(true);
    expect(mockSpeedUp.called).toBe(true);
    expect(mockStopGame.called).toBe(true);
    expect(mockTakeStep.called).toBe(true);
  });

  it('Should react to prop change', () => {
    const initalValue = board.find({id: 7}).props().disabled;
    board.setProps({ gameStatus: 'STOP' });
    const newValue = board.find({id: 7}).props().disabled;
    expect(initalValue).toBe(true);
    expect(newValue).toBe(false);
    expect(newValue).toEqual(!initalValue);
  });

});