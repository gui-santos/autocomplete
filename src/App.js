import React from 'react';
import styled from 'styled-components';
import data from './fruits.json';

import Autocomplete from './components/Autocomplete';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 10rem 0 0;
`;

function App() {
  return (
    <Container>
      <h1>Autocomplete Demo</h1>
      <Autocomplete suggestions={data} />
    </Container>
  );
}

export default App;
