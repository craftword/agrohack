import React from 'react';
import {
  Typography,

} from '@material-ui/core';

//import { Carousel } from 'react-responsive-carousel';
import ButtonAppBar from '../components/AppHeader';
import SimpleBottomNavigation from '../components/AppFooter';
// carousel styles
//import 'style!css!react-responsive-carousel/lib/styles/carousel.css';

class HomePage extends React.Component {
	render() {
		return (
      <React.Fragment>
        <ButtonAppBar />       
          <Typography variant="display2"> Welcome to Agro Mart </Typography>
          <hr />
        <SimpleBottomNavigation /> 
      </React.Fragment>
      );
    }
  }
  
  export default HomePage;