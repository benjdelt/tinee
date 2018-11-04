import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: '2em',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  greeting: {
    display: 'none',
    marginLeft: 20,
    marginRight: 20,
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  bigAvatar: {
    width: 60,
    height: 60,
    marginLeft: 20,
    marginRight: 20,
  },
  notForMobile: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  }
});

function NavLogin(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Avatar
            alt="Tinee"
            src="../images/logo.png"
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
          <Typography className={classes.title} variant="display1" color="inherit" noWrap>
            Tinee
          </Typography>
          <div className={classes.grow} />
          <form>
            <div className={classes.search}>
              <Input
                placeholder="Email"
                type="email"
                disableUnderline
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
              <Input
                placeholder="Password"
                type="password"
                disableUnderline
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <Button color="inherit">Log In</Button>
          </form>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavLogin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavLogin);
