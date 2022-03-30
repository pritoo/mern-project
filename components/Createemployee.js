import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Create() {
  const classes = useStyles();

  const [employee, setEmployee] = useState({
      empNo : '',
      name:'',
      email:'',
      salary:'',
      phone:'',
      section:''
  })

  const createEmployee = () => {
  //  axios.post('http://localhost:5000/office',employee).then(() =>{
  //      window.location.reload(false);
  //   })
    console.log(employee)
    //console.log(typeof(employee.salary))
  }

  return (
      <>
      <h2> Create Employee </h2>
    <form className={classes.root}  autoComplete="off">
     
      <TextField id="standard-number" type="number" label="Employee Number" variant="outlined" value={employee.empNo} onChange={(e)=>
      {
        setEmployee({ ...employee,empNo : e.target.value})
      }}/>
      <TextField id="outlined-basic" label="Name" variant="outlined"  value={employee.name}  onChange={(e)=>
      {
        setEmployee({ ...employee,name : e.target.value})
      }}/>
      <TextField id="outlined-basic" label="Email" variant="outlined" value={employee.email}  onChange={(e)=>
      {
        setEmployee({ ...employee,email : e.target.value})
      }}/>
      <TextField id="standard-number" type="number" label="salary" variant="outlined" value={employee.salary}  onChange={(e)=>
      {
        setEmployee({ ...employee,salary : e.target.value})
      }}/>
      <TextField id="standard-number" type="number" label="Phone" variant="outlined" value={employee.phone}  onChange={(e)=>
      {
        setEmployee({ ...employee,phone : e.target.value})
      }}/>
      <TextField id="outlined-basic" label="Section" variant="outlined" value={employee.section}  onChange={(e)=>
      {
        setEmployee({ ...employee,section : e.target.value})
      }}/>
      <Button variant="contained" color="primary" onClick={createEmployee}>
       Create
      </Button>
    </form>
    </>
  );
}
