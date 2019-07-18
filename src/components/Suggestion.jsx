import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
  padding: 0.75rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: #eaf5ff;
  }
`;

function Suggestion({ value, filterValue, handleClick }) {
  const filterValueIdx = value.toLowerCase().indexOf(filterValue.toLowerCase());
  const filterValueLength = filterValue.length;

  const front = value.substring(0, filterValueIdx);
  const rest = value.substring(filterValueIdx + filterValueLength);
  const highlighted =
    filterValueIdx === 0 ? (
      <b>{`${filterValue[0].toUpperCase()}${filterValue.substring(1)}`}</b>
    ) : (
      <b>{filterValue.toLowerCase()}</b>
    );

  console.log({ filterValueIdx, value });

  return (
    <ListItem onClick={() => handleClick(value)}>
      {front}
      {highlighted}
      {rest}
    </ListItem>
  );
}

Suggestion.propTypes = {
  value: PropTypes.string.isRequired,
  filterValue: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Suggestion;
