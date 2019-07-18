import React from 'react';
import PropTypes from 'prop-types';

import { useAutocomplete } from './autocompleteHooks';
import { Wrapper, Label, Input, SuggestionList } from './AutocompleteStyles';
import Suggestion from './Suggestion';

function Autocomplete(props) {
  const {
    value,
    filtered,
    showSuggestions,
    activeSuggestion,
    handleChange,
    handleClick,
    handleKeyDown,
  } = useAutocomplete(props.suggestions);

  return (
    <Wrapper>
      <Label htmlFor="autocomplete">Search for fruit or legume</Label>
      <Input
        id="autocomplete"
        type="text"
        name="autocomplete"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {showSuggestions && value && (
        <SuggestionList>
          {filtered.map((fruit, idx) => (
            <Suggestion
              key={idx}
              value={fruit}
              active={idx === activeSuggestion}
              filterValue={value}
              handleClick={handleClick}
            />
          ))}
        </SuggestionList>
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
