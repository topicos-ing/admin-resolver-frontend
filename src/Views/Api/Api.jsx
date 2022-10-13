import React, { useEffect, useState } from 'react';
import api from '../../Api';

import { Container } from './styles';

const Api = () => {
  const [apiResponse, setApiResponse] = useState([]);
  useEffect(() => {
    api.get('posts?_limit=10').then((res) => {
      if (res.status === 200) {
        setApiResponse(res.data);
      }
    });
  }, []);

  return (
    <Container>
      {apiResponse.map((value) => (
        <p>{value.body}</p>
      ))}
    </Container>
  );
};
export default Api;
