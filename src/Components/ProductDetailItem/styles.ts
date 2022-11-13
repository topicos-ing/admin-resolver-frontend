import { styled } from '@mui/material';

export const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
}));
export const InputLabel = styled('div')(({ theme }) => ({
  width: '30%',
  overflow: 'hidden',
  textOverflow: 'clip',
  wordWrap: 'break-word',
  marginRight: 10,
  fontFamily: theme.fontFamily.inter,
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: theme.fontSize.medium,
  letterSpacing: 0.526191,
  color: theme.colors.titleDark,
}));
export const Line = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop: 10,
  height: 0.75,
  backgroundColor: theme.colors.brown,
}));
export const Title = styled('div')(({ theme }) => ({
  fontFamily: theme.fontFamily.inter,
  fontStyle: 'normal',
  fontWeight: 600,
  letterSpacing: 1.11111,
  fontSize: theme.fontSize.mediumLargeLarge,
  color: theme.colors.black,
  marginTop: 32,
}));
