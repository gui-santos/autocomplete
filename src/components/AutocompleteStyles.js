import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 450px;
  margin: 0 auto;
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.85rem;
  color: #5c5c5c;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  outline: none;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border: 2px solid #000;
  &:focus {
    border-color: #0075ff;
  }
`;

export const SuggestionList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  box-shadow: 0px 16px 20px 0px rgba(0, 0, 0, 0.1);
  max-height: 420px;
  overflow-y: auto;
  border-radius: 0 0 2px 2px;
`;
