import React from 'react';
const Trigger = ({ triggerText, showModal }) => {
  return (
    <button
      className="btn btn-lg btn-danger center modal-button"
      
      onClick={showModal}
    >
      {triggerText}
    </button>
  );
};
export default Trigger;
