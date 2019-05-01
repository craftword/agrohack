import React from 'react';
import Layout from 'material-ui-layout';
import ButtonAppBar from "../components/AppHeader"
import SimpleBottomNavigation from "../components/AppFooter"
import Main from "../components/main"

  class AppLayout extends React.Component {
    render(){
      const {children} = this.props;
      return(
           <Layout
            appBarContent={<ButtonAppBar/>}
            footerContent={<SimpleBottomNavigation />}
            stickyFooter
            >
            <Main />
            </Layout>
        )
      }
    }
  

  export default AppLayout;