import React, {Component} from 'react';
import MicrolinkCard from 'react-microlink';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import classNames from 'classnames';

import CopyUrl from './copy-url';


const styles = theme => ({
  urlElement: {
    // marginLeft: '20px',
    // marginRight: '20px',
  },
})

// const theme = createMuiTheme({
//   palette: {
//     secondary: orange,
//   },
// });

class UrlUnauth extends Component {
  
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24} justify="space-evenly">

        <Grid item xs={12} sm={6} md={4} className={classes.urlElement}>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.urlElement}>
  
          <Typography variant='caption'>Created OCT 29, 3:05 PM</Typography>
          <MicrolinkCard
            url='https://www.theverge.com/tldr/2018/2/7/16984284/tesla-space-falcon-heavy-launch-elon-musk'
            target='_blank'
            size='large'
          />
          <Button color="primary" variant="outlined" href="/abd123">/abd123</Button>
          <CopyUrl></CopyUrl>

        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.urlElement}>
        </Grid>

      </Grid>
    )
  }
}
UrlUnauth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UrlUnauth);
