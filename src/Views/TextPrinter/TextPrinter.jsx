import React from 'react';

import { useParams, useLocation } from 'react-router-dom';

import { Container } from './styles';

const TextPrinter = () => {
  const { textToPrint } = useParams();
  const { state } = useLocation();
  return (
    <Container>
      <h1>URL: {textToPrint}</h1>
      <h1>STATE: {state?.textFromParams}</h1>
    </Container>
  );
};

export default TextPrinter;
