import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'

const RecommendationTable = ({ forecast }) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="recommendation calendar">
      <TableHead sx={{ backgroundColor: "#EEE" }}>
        <TableRow>
          <TableCell>Date/Time</TableCell>
          <TableCell align="right">Temp</TableCell>
          <TableCell align="right">Weather</TableCell>
          <TableCell align="right">Contact Type</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {forecast.hasOwnProperty(0) && forecast.map(data => (
          <TableRow
            key={data.dateTime}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {data.dateTime}
            </TableCell>
            <TableCell align="right">{data.temp}</TableCell>
            <TableCell align="right">{data.weather}</TableCell>
            <TableCell align="right">{data.contactType}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)


export default RecommendationTable
