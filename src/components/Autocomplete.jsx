import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Label, Input } from './AutocompleteStyles';

function Autocomplete(props) {
  const [suggestions] = useState(props.suggestions);
  const [filtered, setFiltered] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    const newSuggestions = suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1
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
          {filtered.map((fruit, idx) => (
            <li key={idx}>{fruit}</li>
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
