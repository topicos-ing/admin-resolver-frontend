import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { ButtonsSeparator, Container, ParamH1 } from './styles';
import Routes from '../../Utils/routes';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log(navigator.language);
  }, []);

  return (
    <Container>
      <h1
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '5rem',
          margin: 0,
        }}
      >
        Title
      </h1>
      {/* Lo mismo que arriba pero los estilos estan aplicados al componente */}
      <ParamH1 newFontSize='2rem'>Styled Component</ParamH1>
      {/* https://mui.com/material-ui/react-text-field/ */}
      <div style={{ width: 300 }}>
        <TextField
          id='standard-basic'
          label='Un hermoso placeholder'
          variant='standard'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginTop: 30 }}
          fullWidth
        />
      </div>
      <ButtonsSeparator>
        {/* https://mui.com/material-ui/react-button/ */}
        <Button
          fullWidth
          variant='contained'
          onClick={() => console.log(inputValue)}
        >
          Imprimir en Consola
        </Button>
        <Button
          variant='contained'
          fullWidth
          onClick={() =>
            navigate(`${Routes.PRINTER}/${inputValue}`, {
              state: { textFromParams: inputValue },
            })
          }
          disabled={!inputValue}
        >
          Navegar a otra pagina con Texto
        </Button>
        <Button
          fullWidth
          variant='contained'
          onClick={() => navigate('bla bla')}
        >
          NOT FOUND
        </Button>
      </ButtonsSeparator>
    </Container>
  );
};

export default Home;
