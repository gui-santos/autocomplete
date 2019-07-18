import React from 'react';
import PropTypes from 'prop-types';

function Suggestion({ value, filterValue, handleClick }) {
  const filterValueIdx = value.toLowerCase().indexOf(filterValue.toLowerCase());
  const filterValueLength = filterValue.length;

  const front = value.substring(0, filterValueIdx);
  const rest = value.substring(filterValueIdx + filterValueLength);
  const highlighted =
    filterValueIdx === 0 ? (
      <b>{`${filterValue[0].toUpperCase()}${filterValue.substring(1)}`}</b>
    ) : (
      <b>{filterValue}</b>
    );

  return (
    <li onClick={() => handleClick(value)}>
      {front}
      {highlighted}
      {rest}
    </li>
  );
}

Suggestion.propTypes = {
  value: PropTypes.string.isRequired,
  filterValue: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Suggestion;
