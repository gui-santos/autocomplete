import React from 'react';
import styled from 'styled-components';

import Autocomplete from './components/Autocomplete';

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 10rem 0 0;
`;

function App() {
  return (
    <Container>
      <Autocomplete />
    </Container>
  );
}

export default App;
