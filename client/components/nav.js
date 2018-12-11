import React, { Component } from 'react';
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
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';

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

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    }
  }

  handleClick = () => {
    axios.post('users/sessions')
      .then(() => this.props.setUserId(''))
  }

  componentDidMount() {
    axios.get('users/sessions', {
      userId: this.props.Userid
    }).then(res => this.setState({email: res.data.email}))
  }

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
            <Typography className={classes.title} variant="display1" color="inherit" noWrap>
              Tinee
            </Typography>
            <div className={classes.grow} />
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <Input
                placeholder="Search in Url…"
                disableUnderline
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div> */}
            <Typography  className={classes.greeting} variant="title" color="inherit" noWrap>
              {this.state.email}
            </Typography>
            <Button color="inherit" onClick={this.handleClick}>Log Out</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
