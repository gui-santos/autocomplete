import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Label, Input } from './AutocompleteStyles';

function Autocomplete(props) {
  const [suggestions] = useState(props.suggestions);
  const [filtered, setFiltered] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    const newSuggestions = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(newSuggestions);
  }, [value, suggestions]);

  const handleChange = e => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setShowSuggestions(true);
  };

  return (
    <Wrapper>
      <Label htmlFor="autocomplete">Fruit or legume</Label>
      <Input
        id="autocomplete"
        type="text"
        name="autocomplete"
        value={value}
        onChange={handleChange}
      />
      {showSuggestions && value && (
        <ul>
          {filtered.map((fruit, idx) => {
            const valueIdx = fruit.toLowerCase().indexOf(value);
            const valueLength = value.length;

            const front = fruit.substring(0, valueIdx);
            const rest = fruit.substring(valueIdx + valueLength);

            const highlighted =
              valueIdx === 0 ? (
                <b>{`${value[0].toUpperCase()}${value.substring(1)}`}</b>
              ) : (
                <b>{value}</b>
              );

            return (
              <li key={idx}>
                {front}
                {highlighted}
                {rest}
              </li>
            );
          })}
        </ul>
      )}
    </Wrapper>
  );
}

Autocomplete.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

Autocomplete.defaultProps = {
  suggestions: [],
};

export default Autocomplete;
