import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link';



const styles = {
    paperContainer: {
        flexGrow: 1,
        backgroundImage: `url("/static/bkgrd.jpg")`
    },
    homeTxt: {
      color:"#ff0000"
    },
    button: {
    textAlign: 'center',
    margin: 'auto',
    padding:'auto',
    
  },
    
};

export default class Main extends React.Component{
    render(){
        return(      
        <Grid style={styles.paperContainer} container spacing={24} alignItems="center">
            <Grid item xs={12} container
                  direction="column"
                  justify="center"
                  alignItems="center"
              >
                <Typography gutterBottom variant="h4">
                  AGRO MARKETING APP 
                </Typography>
                <Typography style={styles.homeTxt}>
                    CONNECTING FARMERS TO THE PEOPLE
                </Typography>
                <Grid item xs container direction="column" spacing={16} alignItems="center" style={styles.button}>
                    <Grid item xs>                        
                        <Link href="/about">
                            <Button variant="contained"  color="secondary" >
                                Get Started
                            </Button>
                        </Link>
                       
                        <Link href="/lists">
                            <Button variant="contained"  color="primary" >
                                Get Farmers 
                            </Button>
                        </Link>
                    </Grid>
                    
                </Grid>      
              </Grid>
            

        </Grid>
          
            
           
        )
    }
}
