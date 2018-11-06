import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// TODO 
// - Target _blank for links 
// - color theme for links


const styles = theme => ({
  root: {
    display: 'none',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '1rem',
    textAlign: 'center',
    overflow: 'hidden',
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
});

function DenseAppBar(props) {
  const { classes } = props;
  return (
    <footer className={classes.root}>
      <Grid container spacing={24}>
        <Grid item md={4}>
          <Typography variant="caption" color="primary">
            Tinee by <a href="https://benjdelt.github.io/">Ben Deltenre</a> 
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Typography variant="caption" color="primary">
            <a href="mailto:benjdelt@gmail.com">Contact</a>
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Typography variant="caption" color="primary">
            Logo made with <a href="https://www.designevo.com/en/" title="Free Online Logo Maker">DesignEvo</a>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DenseAppBar);