import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const styles = {
    paperContainer: {
        flexGrow: 1,
        backgroundImage: `url("/static/bkgrd.jpg")`
    },
    homeTxt: {
      color:"#ffffff"
    }
};

export default class Main extends React.Component{
    render(){
        return(      
            <Grid style={styles.paperContainer} container spacing={24}>
              <Grid item xs={2}>
                
              </Grid>
              <Grid item xs={8} container
                  direction="column"
                  justify="center"
                  alignItems="center"
              >
                <Typography gutterBottom variant="h4">
                  AGRO MARKETING APP 
                </Typography>
                <Typography style={styles.homeTxt}>
                  The App is meant to solve the problem of food waste in Nigeria
                  Since most farmers are in rural in Nigeria, the app connect the farmers with 
                  potential buyers across the country. 
                </Typography>  
                

              </Grid>  
            </Grid>
          
            
           
        )
    }
}
