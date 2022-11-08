import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '1.5px',
  fontFamily: theme.fontFamily.oswald,
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: theme.fontSize.mediumLarge,
  lineHeight: '27px',
  textAlign: 'center',
  letterSpacing: '1.25px',
  textTransform: 'uppercase',
  color: theme.colors.white,
  padding: '14px 40px 14px 40px',
}));
