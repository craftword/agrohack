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
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
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
     console.log(rows);
    return (
      <div>
        <ButtonAppBar />
        <Grid container spacing={24}>
            <Grid item xs={2}>
                
            </Grid>
            <Grid item xs={7}>
              <div className={classes.root}>
                <div>
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
                                  <TableCell >
                                      {row.product}
                                  </TableCell>
                                  <TableCell >
                                      {row.quantity}
                                  </TableCell>
                                  <TableCell >
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
                 
                    <SimpleBottomNavigation /> 
                
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
