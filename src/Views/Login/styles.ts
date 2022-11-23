import { styled } from '@mui/material';

export const BottomSubContainer = styled('div')(() => ({
  display: 'flex',
  flex: 1,
  overflow: 'hidden',
}));

export const Container = styled('div')(({ theme }) => ({
  backgroundColor: theme.colors.background,
  display: 'flex',
  width: '100vw',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const SubContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.colors.white,
  width: '80%',
  height: '80%',
  flexDirection: 'column',
}));
export const Title = styled('div')(({ theme }) => ({
  fontFamily: 'Oswald',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: theme.fontSize.large,
  lineHeight: '47px',
  letterSpacing: '1.15556px',
  color: theme.colors.titleDark,
  marginBottom: 18,
}));

export const TopSubContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: '30px 35px 16px 35px',
  borderBottom: `1px solid ${theme.colors.dark}`,
  flexDirection: 'column',
}));
