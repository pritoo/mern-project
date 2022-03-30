import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function ShowEmployee() {
  const classes = useStyles();

  const [employeeList,setEmployeeList] =useState([])

  const deleteEmployee =(id) =>{
      axios.delete(`http://localhost:5000/office/${id}`).then(()=>{
          window.location.reload(false)
      })
  }

  useEffect(()=>{
    axios.get('http://localhost:5000/office').then((allEmployees) =>{
        setEmployeeList(allEmployees.data)
    })
  },[])

  return (
      <>
      <h2>All Employees</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Id</TableCell>
            <TableCell>Employee-number</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email&nbsp;</TableCell>
            <TableCell align="right">Phone&nbsp;</TableCell>
            <TableCell align="right">Salary&nbsp;</TableCell>
            <TableCell align="right">Section&nbsp;</TableCell>
            <TableCell align="right">Action&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeList.map((employee,key) => (
            <TableRow key={key}>
            <TableCell component="th" scope="row"> {employee.id}</TableCell>
              <TableCell align="right" >{employee.empNo}</TableCell>
              <TableCell align="right">{employee.name}</TableCell>
              <TableCell align="right">{employee.email}</TableCell>
              <TableCell align="right">{employee.salary}</TableCell>
              <TableCell align="right">{employee.phone}</TableCell>
              <TableCell align="right">{employee.section}</TableCell>
              <TableCell align="right">
              <IconButton aria-label="delete" className={classes.margin} onClick ={()=>deleteEmployee(employee._id)}>
                 <DeleteIcon />
              </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
