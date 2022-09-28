import React from 'react'
import Button from '@mui/material/Button';
import './tableLists.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, email, date, duration, status,property) {
  return { name, email, number: '03016848965', date, duration, status, property };
}

const rows = [
  createData('muhabat Khan', 'muhabatkhan02@gmail.com', '15-5-20', 'Morinig', 'waiting',true),
  createData('muhabat Khan', 'muhabatkhan02@gmail.com', '15-5-20', 'Morinig', 'waiting'),
  createData('muhabat Khan', 'muhabatkhan02@gmail.com', '15-5-20', 'Morinig', 'waiting'),
  createData('muhabat Khan', 'muhabatkhan02@gmail.com', '15-5-20', 'Morinig', 'waiting'),
  createData('muhabat Khan', 'muhabatkhan02@gmail.com', '15-5-20', 'Morinig', 'waiting'),

];



const TableLists = () => {
  return (
    <div className='table-lists'>
      <div className="table-lists__heading">
        <h5>Latest visit requests</h5>
      </div>
      <div className='table-lists__table'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="simple table">
            <TableHead>
              <TableRow className='table-lists__tableHeader'>
                <TableCell>Name</TableCell>
                <TableCell >Email</TableCell>
                <TableCell align="center">Number</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Duration</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  className='table-lists__tablerow'
                >
                  <TableCell> {row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell align="center">{row.number}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.duration}</TableCell>
                  <TableCell align="right">
                    {row.property ?
                      <Button style={{ background: 'rgba(233, 0, 241, 0.98)'}}>Property</Button> :
                      <Button style={{ background: '#1480bd'}}>Site</Button>
                    }
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </div>
  )
}

export default TableLists
