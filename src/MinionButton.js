import React from 'react';

const MinionButton = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

export default MinionButton
