import React from 'react';
import PropTypes from 'prop-types';


const PlusMinusIndicator = ({ correct }) => {
  if (correct) {
    return <span> + </span>;
  }
  return <span> - </span>;
};

PlusMinusIndicator.propTypes = {
  correct: PropTypes.bool.isRequired,
};

export default PlusMinusIndicator;
