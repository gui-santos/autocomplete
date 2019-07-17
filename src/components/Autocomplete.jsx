import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Label, Input } from './AutocompleteStyles';

function Autocomplete(props) {
  const [suggestions, setSuggestions] = useState(props.suggestions);

  return (
    <Wrapper>
      <Label htmlFor="autocomplete">Fruit or legume</Label>
      <Input id="autocomplete" type="text" name="autocomplete" />
      <ul>
        {suggestions.map(fruit => (
          <li>{fruit}</li>
        ))}
      </ul>
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
