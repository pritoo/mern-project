import logo from './logo.svg';
import {Container,AppBar,Grow,Grid,Typography} from '@material-ui/core'; 
import Employee from './components/Showemployee';
import Createemployee from './components/Createemployee';
import './App.css';
import useStyles from './styles';

function App() {
  const classes =useStyles();
  return (
   
    <div className="App">
     
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography clasaName={classes.heading} variant="h4" align="center">
            EmployeeList create and show
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems='strect'>
                <Grid item xs={12} sm={7}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Employee />
                </AppBar>
                </Grid>
                <Grid item xs={12} sm={4}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Createemployee />
                </AppBar>
                </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
     
    </div>
  );
}

export default App;

