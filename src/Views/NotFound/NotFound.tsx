import React from 'react';
import { Alert } from '../../Assets';

import { Container } from './styles';

const NotFound = () => (
  <Container>
    <img src={Alert} alt='Alert' style={{ width: 300, height: 300 }} />
    PAGE NOT FOUND
  </Container>
);

export default NotFound;
