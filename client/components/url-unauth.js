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
  shortButton: {
    textTransform: 'lowercase',
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
      this.props.longUrl ? (
      <Grid container spacing={24} justify="space-evenly">
        <Grid item xs={12} sm={6} md={4}>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant='caption'>{this.props.createdAt}</Typography>
          <MicrolinkCard
            url={this.props.longUrl}
            target='_blank'
            size='large'
          />
          <Button 
            color="primary" 
            variant="outlined" 
            href={'/u/' + this.props.shortUrl}
            target='_blank'
            className={classes.shortButton}
          >
            /u/{this.props.shortUrl}
          </Button>
          <CopyUrl></CopyUrl>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.urlElement}>
        </Grid>
      </Grid>
      ) : (
        <div />
      )
    )
  }
}
UrlUnauth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UrlUnauth);
