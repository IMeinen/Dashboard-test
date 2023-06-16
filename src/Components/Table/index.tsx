import Table from '@mui/material/Table';
import Chip from '@mui/material/Chip';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as Styles from './styles';

function createData(
  item: string,
  date: string,
  earnings: number,
  status: string,
  
) {
  return { item,date,earnings,status };
}

const rows = [
  createData('Cosequat','02/08/2023', 473.18, 'In Progress'),
  createData('Reprehende','01/09/2023', 665.86, 'Completed'),
  createData('Labore','15/12/2023', 322.23, 'Completed'),
];

export default function DataTable() {
  return (
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <Styles.Header>Items</Styles.Header>
            <Styles.Header align="left">Date</Styles.Header>
            <Styles.Header align="left">Earnings</Styles.Header>
            <Styles.Header align="left">Status</Styles.Header>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.item}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <Styles.FirstItem component="th" scope="row">
                {row.item}
              </Styles.FirstItem>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{`$ ${row.earnings}`}</TableCell>
              <TableCell align="left"><Chip label={row.status} color='success' /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}