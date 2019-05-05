import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonAppBar from "../components/AppHeader"
import SimpleBottomNavigation from "../components/AppFooter"
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Input from '@material-ui/core/Input';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import fetch from 'isomorphic-unfetch'


 const PORT = process.env.PORT || 3000;

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    marginRight: theme.spacing.unit,
  },
  section1: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
  },
  section2: {
    margin: theme.spacing.unit * 2,
  },
   section3: {
    margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
    padding:theme.spacing.unit,
        
  },
  
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
   button: {
    margin: theme.spacing.unit,
  },
  table: {
    minWidth: 500,
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

class ListItems extends React.Component {
   constructor(props) {
    super(props);  
    this.state = {
        rows:[],
    };
    this.removeItem = this.removeItem.bind(this);  }

  static async getInitialProps() {
    const res = await fetch(`http://localhost:${ PORT }/api/products`)
    const rows = await res.json()
    return { rows }
  }
  componentWillMount() {
    this.setState({
      rows: this.props.rows
    })
    console.log(this.props.rows)
  }
 

removeItem(itemIndex) {
    const rows = this.state.rows
     rows.splice(itemIndex, 1);
     this.setState({rows: rows}); 
  }
    
  render() {
    const { classes } = this.props;
     const { rows} = this.state;
     //console.log(rows);
    return (
      <div>
        <ButtonAppBar />
        <Grid container spacing={24}>
            <Grid item xs={2}>
                
            </Grid>
            <Grid item xs={7}>
              <div className={classes.root}>
                <div className={classes.section2}>
                  <Typography gutterBottom variant="h5">
                    List Of Available Product
                  </Typography>
                  <hr />
                  <Paper className={classes.root}>
                      <Table className={classes.table}>
                          <TableHead>
                              <TableRow>
                                  <TableCell>Phone Number</TableCell>
                                  <TableCell>Product</TableCell>
                                  <TableCell>Quantity</TableCell>
                                  <TableCell>Price</TableCell>
                                  <TableCell align="right"></TableCell>                        
                              </TableRow>
                          </TableHead>
                          <TableBody>
                            
                            {rows.map(row => (
                                
                                  <TableRow key={row.id}>
                                  <TableCell component="th" scope="row">
                                      {row.phoneNumber}
                                  </TableCell>
                                  <TableCell component="th" scope="row">
                                      {row.product}
                                  </TableCell>
                                  <TableCell component="th" scope="row">
                                      {row.quantity}
                                  </TableCell>
                                  <TableCell component="th" scope="row">
                                      {row.price}
                                  </TableCell>
                                  <TableCell align="right">
                                      <IconButton aria-label="Delete" className={classes.margin} onClick={this.removeItem}>
                                          <DeleteIcon fontSize="small"/>
                                      </IconButton>                            
                                  </TableCell>                       
                                  </TableRow>
                              ))}
                          </TableBody>
                      </Table>
                  </Paper>
                </div>
                 <div className={classes.section3}>
                    <SimpleBottomNavigation /> 
                </div>
              </div>
            </Grid>
        </Grid>
      </div>
    )
  }
}

ListItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItems);
