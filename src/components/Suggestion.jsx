import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
  background-color: ${props => (!props.active ? 'transparent' : '#eaf5ff')};
  padding: 0.75rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: #eaf5ff;
  }
`;

function Suggestion({ value, active, filterValue, handleClick }) {
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

  return (
    <ListItem onClick={() => handleClick(value)} active={active}>
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
  active: PropTypes.bool,
};

Suggestion.defaultProps = {
  active: false,
};

export default Suggestion;
