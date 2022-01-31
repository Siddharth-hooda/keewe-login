import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid } from '@mui/material';
// import PersonIcon from '@mui/icons-material/Person';

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, <Button variant='text'>Download</Button>),
    createData('Ice cream sandwich', 237, 9.0, <Button variant='text'>Download</Button>),
    createData('Eclair', 262, 16.0, <Button variant='text'>Download</Button>),
    createData('Cupcake', 305, 3.7, <Button variant='text'>Download</Button> ),
    createData('Gingerbread', 356, 16.0, <Button variant='text'>Download</Button>),
  ];
  

const Table1 = () => {
  return <>
  <Grid container padding={'4%'}>
  <Grid xs={1}></Grid>
       <Grid xs={10}>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project</TableCell>
            <TableCell align="right">Total Time</TableCell>
            <TableCell align="right">Credit Score</TableCell>
            <TableCell align="right">Download Report</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       </Grid>
    <Grid xs={1}></Grid>
    </Grid>
  </>;
};

export default Table1;
