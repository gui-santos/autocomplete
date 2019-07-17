import React from 'react';

import data from '../fruits.json';

function Autocomplete() {
  data.map(fruit => console.log(fruit));
  return <input type="text" name="autocomplete" />;
}

export default Autocomplete;
