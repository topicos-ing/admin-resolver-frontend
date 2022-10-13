import styled from '@emotion/styled';

export const Container = styled.div(() => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const ParamH1 = styled.h1(({ newFontSize }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: newFontSize,
  margin: 0,
}));

export const ButtonsSeparator = styled.div(() => ({
  marginTop: 50,
  gap: 20,
  flexDirection: 'column',
  display: 'flex',
}));
