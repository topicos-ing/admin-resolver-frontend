import {
  Box,
  styled,
  TableCell,
  TableContainer as TableContainerMUI,
  TableSortLabel,
} from '@mui/material';

export const Container = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  overflow: 'hidden',
}));

export const TableButtonCellHeaders = styled(TableCell)(({ theme }) => ({
  fontFamily: theme.fontFamily.inter,
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: theme.fontSize.small,
  lineHeight: '15px',
  color: theme.colors.dark,
}));

export const TableContainer = styled(TableContainerMUI)(() => ({
  width: '100%',
  display: undefined,
  flex: 1,
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

export const TableHeaders = styled(TableSortLabel)(({ theme }) => ({
  fontFamily: theme.fontFamily.inter,
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: theme.fontSize.small,
  lineHeight: '15px',
  textTransform: 'uppercase',
  color: theme.colors.titleDark,
}));

export const TableRowCell = styled(TableCell)(({ theme }) => ({
  fontFamily: theme.fontFamily.inter,
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: theme.fontSize.mediumSmall,
  lineHeight: '17px',
  color: theme.colors.titleDark,
}));

export const TableRowCellSelected = styled(TableCell)(({ theme }) => ({
  fontFamily: theme.fontFamily.inter,
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: theme.fontSize.mediumSmall,
  lineHeight: '17px',
  color: theme.colors.purple,
  textDecorationLine: 'underline',
}));
