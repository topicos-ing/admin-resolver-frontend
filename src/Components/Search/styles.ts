import { styled } from '@mui/material';

export const ButtonContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));

export const ErrorMessage = styled('div')(({ theme }) => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: theme.fontSize.medium,
  lineHeight: '19px',
  letterSpacing: '1.11111px',
  color: theme.colors.error,
  margin: '16px 0 12px 0',
  whiteSpace: 'pre-wrap',
}));
