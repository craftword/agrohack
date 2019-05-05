import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonAppBar from "../components/AppHeader"
import SimpleBottomNavigation from "../components/AppFooter"


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 2,
    
  },
});


function About(props) {
   
  const { classes } = props;  
    return (
      <div>
        <ButtonAppBar />
        <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          About the App.
        </Typography>
        <hr />
        <Typography component="p">
          This application is to reduce the Food wastage and Hunger in Nigeria by create a platform where Consumers locate farmers.
          Statistic had shown that Nigeria produce enough but most of products gone bad while farmers look for buyer.
          This App tend to advertise the farmer to the public immediately after his harvest. This is achieved by using USSD code  because most farmers leave in rural area 
          where there is no or little access to internet but has a mobile phone.
          Once the farmer use the USSD code, details about his products is store on our site, so potential buyer can access the information from the site.
        </Typography>

        <Typography variant="h5" component="h3">
          How to Use.
        </Typography>
        <hr />

        <Typography variant="h6">
            FARMERS
        </Typography>

        <Typography component="p">
        All that the farmers need is to dials USSD code *384*22511#, the app will ask for the product, quantity and price.        
        Note: App is not live yet because of payment to gateway provider but you can use this simulation
        https://simulator.africastalking.com:1517/
        </Typography>
        <hr />

        <Typography variant="h6">
            CONSUMERS
        </Typography>

        <Typography component="p">
            On the site, click on the get farmers to get product details and farmers phone nuumber.
            Note: User will need to register later.
        </Typography>

      </Paper>
      </div>
    ) 
  
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);

