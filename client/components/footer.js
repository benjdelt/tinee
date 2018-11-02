import React from 'react';

// class Footer extends Component {

//   render() {
//     return (
//       <footer>
//         <p>Tinee by Ben Deltenre</p>
//         <span><i class="fas fa-cut"></i></span>
//         <a href="#">Contact me</a>
//         <div>Logo made with <a href="https://www.designevo.com/en/" title="Free Online Logo Maker">DesignEvo</a></div>
//       </footer>
//     )
//   }

// }

// export default Footer;

import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    display: 'none',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // width: '100%',
    padding: '1rem',
    textAlign: 'center',
    overflow: 'hidden',
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  menuButton: {
    // marginLeft: -18,
    // marginRight: 10,
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