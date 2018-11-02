import React, {Component} from 'react';
import MicrolinkCard from 'react-microlink';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Copy from '@material-ui/icons/FileCopy';
import Edit from '@material-ui/icons/Create';
import Delete from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import classNames from 'classnames';
import orange from '@material-ui/core/colors/orange';

const styles = theme => ({
  urlElement: {
    // marginLeft: '20px',
    // marginRight: '20px',
  }
})

const theme = createMuiTheme({
  palette: {
    secondary: orange,
  },
});

class Urls extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24} justify="space-evenly">
        <Grid item xs={12} sm={6} md={4} className={classes.urlElement}>
  
          <Typography variant='caption'>Created OCT 29, 3:05 PM</Typography>
          <MicrolinkCard
            url='https://www.theverge.com/tldr/2018/2/7/16984284/tesla-space-falcon-heavy-launch-elon-musk'
            target='_blank'
          />
          <Button color="primary" variant="outlined" href="/abd123">/abd123</Button> 
          <Button color="primary"><Copy/>Copy</Button>
          <Button color="primary"><Edit />Edit</Button>
          <MuiThemeProvider theme={theme}>
            <Button  variant="outlined" color="secondary"><Delete />Delete</Button>
          </MuiThemeProvider>  
        </Grid>
           
        <Grid item xs={12} sm={6} md={4}>

          <Typography variant='caption'>Created OCT 29, 3:05 PM</Typography>
          <MicrolinkCard 
            url='https://medium.freecodecamp.org/learning-python-from-zero-to-hero-120ea540b567?fbclid=IwAR1GY8Y7RcG0uK_wuPuFhmqV6xV82wupRqh5GQ5NPKd8GDsTkD3KrDuex9E'
            target='_blank'
          />
          <Button color="primary" variant="outlined" href="/abd123">/abd123</Button>
          <Button color="primary"><Copy/>Copy</Button>
          <Button color="primary"><Edit />Edit</Button>
          <MuiThemeProvider theme={theme}>
            <Button  variant="outlined" color="secondary"><Delete />Delete</Button>
          </MuiThemeProvider>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
  
          <Typography variant='caption'>Created OCT 29, 3:05 PM</Typography>
          <MicrolinkCard
            url='https://docs.mongodb.com/manual/mongo/'
            target='_blank'
          />
          <Button color="primary" variant="outlined" href="/abd123">/abd123</Button>
          <Button color="primary"><Copy/>Copy</Button>
          <Button color="primary"><Edit />Edit</Button>
          <MuiThemeProvider theme={theme}>
            <Button  variant="outlined" color="secondary"><Delete />Delete</Button>
          </MuiThemeProvider>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>

          <Typography variant='caption'>Created OCT 29, 3:05 PM</Typography>
          <MicrolinkCard
            url='https://blog.cloudboost.io/creating-your-first-mern-stack-application-b6604d12e4d3'
            target='_blank'
          />
          <Button color="primary" variant="outlined" href="/abd123">/abd123</Button>
          <Button color="primary"><Copy/>Copy</Button>
          <Button color="primary"><Edit />Edit</Button>
          <MuiThemeProvider theme={theme}>
            <Button  variant="outlined" color="secondary"><Delete />Delete</Button>
          </MuiThemeProvider>
        </Grid>
        
      </Grid>
    )
  }
}
Urls.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Urls);
