import React from 'react'

const Alert = (props) => (
  <div style={props.style} class="alert alert-primary" role="alert">
    {props.message}
  </div>
);

export default Alert;