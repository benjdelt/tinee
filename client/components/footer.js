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
    width: '100%',
    margin: 0,
    padding: 0, 
    border: 0,
    overflowX: 'hidden',
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
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DenseAppBar);