import React from "react";
import { Button } from 'reactstrap';
import propTypes from 'prop-types';
import './button.css';

const CustomButton = ({title, handleClick, size, color, id, className, timerId, disabled}) => (
  <Button
    className={className}
    id={id}
    color={color}
    size={size}
    onClick={() => handleClick(timerId)}
    disabled={disabled}>
      {title}
  </Button>
);

CustomButton.defaultProps = {
  disabled: false,
}

export default CustomButton;