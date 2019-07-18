import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Label, Input } from './AutocompleteStyles';
import Suggestion from './Suggestion';

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

  const handleClick = value => {
    setValue(value);
    setShowSuggestions(false);
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
          {filtered.map((fruit, idx) => (
            <Suggestion
              key={idx}
              value={fruit}
              filterValue={value}
              handleClick={handleClick}
            />
          ))}
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
