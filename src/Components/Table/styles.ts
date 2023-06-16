import styled from 'styled-components';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export const Header = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#e9ecef',
    color: '#495057'
  },
}));

export const FirstItem = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {  
    color: '#212529',
    fontWeight: 700
  },
}));