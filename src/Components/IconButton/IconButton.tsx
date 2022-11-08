import { styled } from '@mui/material';

import { Button } from '../Button/Button';

export const IconButton = styled(Button)(() => ({
  padding: 0,
  minWidth: 0,
  width: 38.61,
  height: 38.61,
  alignItems: 'center',
  justifyContent: 'center',
  span: {
    margin: 0,
  },
}));
