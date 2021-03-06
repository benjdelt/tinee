import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';

import SignUp from './signup';
import LogIn from './login';

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: '2em',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  bigAvatar: {
    width: 60,
    height: 60,
    marginLeft: 20,
    marginRight: 20,
  },
});

class NavAuth extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Avatar
              alt="Tinee"
              src="../images/logo.png"
              className={classNames(classes.avatar, classes.bigAvatar)}
            />
            <Typography 
              className={classes.title} 
              variant="display1" 
              color="inherit" 
              noWrap
            >
              Tinee
            </Typography>
            <div className={classes.grow} />
              <SignUp></SignUp>
              <LogIn setUserId={this.props.setUserId}></LogIn>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavAuth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavAuth);
