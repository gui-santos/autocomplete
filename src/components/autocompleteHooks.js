import { useState, useEffect } from 'react';

export function useAutocomplete(initialState) {
  const [suggestions] = useState(initialState);
  const [filtered, setFiltered] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [value, setValue] = useState('');
  const [activeSuggestion, setActiveSuggestion] = useState(0);

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
    setActiveSuggestion(0);
  };

  const handleClick = value => {
    setValue(value);
    setShowSuggestions(false);
  };

  const handleKeyDown = e => {
    switch (e.keyCode) {
      case 40:
        // handle case when user press DOWN
        if (activeSuggestion < filtered.length - 1) {
          setActiveSuggestion(activeSuggestion + 1);
        }
        break;
      case 38:
        // handle case when user press UP
        if (activeSuggestion > 0) {
          setActiveSuggestion(activeSuggestion - 1);
        }
        break;
      case 13:
        // handle case when user press ENTER
        setValue(filtered[activeSuggestion]);
        setShowSuggestions(false);
        setActiveSuggestion(0);
        break;
      default:
        return;
    }
  };

  return {
    value,
    filtered,
    showSuggestions,
    activeSuggestion,
    handleChange,
    handleClick,
    handleKeyDown,
  };
}
