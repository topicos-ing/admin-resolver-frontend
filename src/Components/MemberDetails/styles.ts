import { Backdrop, styled } from '@mui/material';

export const BackdropContainer = styled(Backdrop)(({ theme }) => ({
  backgroundColor: theme.colors.backdropBackground,
}));
