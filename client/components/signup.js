import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


function Transition(props) {
  return <Slide direction="down" {...props} />;
}

const styles = theme => ({
  formText: {
    textAlign: 'center',
  },
  textField: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing.unit * 2,
    width: 200,
    display: 'block',
  },
  SBClose: {
    padding: theme.spacing.unit / 2,
  },
});


class SignUp extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      openSB: false,
      open: false,
      email: '',
      emailLabel: 'Email',
      emailError: false,
      password: '',
      passwordLabel: 'Password',
      passwordError: false,
      pwConfirmation: '',
      pwConfirmationLabel: 'Confirm Password',
      pwConfirmationError: false,
    };
    this.handleOpenSB = this.handleOpenSB.bind(this);
    this.handleCloseSB = this.handleCloseSB.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpenSB = () => {
    this.setState({ openSB: true });
  };

  handleCloseSB = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ openSB: false });
  };

  handleClickOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  checkEmpty(field, value) {
    if(!value.trim()) {
      this.setState({
        [field]: '',
        [field + 'Label']: 'Cannot be Empty',
        [field + 'Error']: true,
      })
      return true;
    }
    let label = field;
    if(field === 'pwConfirmation') {
      label = "Password Confirmation"
    }
    this.setState({
      [field + 'Label']: label,
      [field + 'Error']: false,
    })
    return false;
  }

  checkEmailFormat(value) {
    if (!value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      this.setState({
        emailLabel: 'Invalid Email Format',
        emailError: true,
      })
      return false;
    } 
    this.setState({
      emailLabel: 'Email',
      emailError: false,
    })
    return true;
  }

  handleSubmit(event) {
    event.preventDefault();
    if(!this.checkEmailFormat(this.state.email)) {
      return;
    }
    if (this.checkEmpty('password', this.state.password) || this.checkEmpty('pwConfirmation', this.state.pwConfirmation)) {
      return;
    }
    
    if (this.state.password !== this.state.pwConfirmation) {
      this.setState({
        password: '',
        passwordLabel: "Passwords don't match",
        passwordError: true,
        pwConfirmation: '',
        pwConfirmationLabel: "Passwords don't match",
        pwConfirmationError: true,
      })
      return;
    }
    axios.post('/users', {
      email: this.state.email,
      password: this.state.password,
    }).then(res => {
      if (res.data.errmsg && res.data.errmsg.includes('duplicate')) {
        this.setState({
          emailLabel: "Email already used",
          emailError: true,
        })
      } else {
        this.setState({
          email: '',
          emailLabel: 'Email',
          emailError: false,
          password: '',
          passwordLabel: 'Password',
          passwordError: false,
          pwConfirmation: '',
          pwConfirmationLabel: 'Confirm Password',
          pwConfirmationError: false,
        })
        this.handleClose();
        this.handleOpenSB();
      }
    })
  }

  render() {

    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleClickOpen} color="inherit">Sign Up</Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
        >
          <DialogTitle className={classes.formText}>
            Sign Up
          </DialogTitle>
            <form onSubmit={this.handleSubmit}>
              <DialogContent>
                <DialogContentText>
                  <TextField
                      label = {this.state.emailLabel}
                      name = "email"
                      type= "email"
                      className={classes.textField}
                      value={this.state.email}
                      onChange={this.handleChange}
                      margin="normal"
                      required
                      error={this.state.emailError}
                  />
                  <TextField
                      label = {this.state.passwordLabel}
                      name = "password"
                      type="password"
                      className={classes.textField}
                      value={this.state.password}
                      onChange={this.handleChange}
                      margin="normal"
                      required
                      error={this.state.passwordError}
                  />
                  <TextField
                      label = {this.state.pwConfirmationLabel} 
                      name = "pwConfirmation"
                      type="password"
                      className={classes.textField}
                      value={this.state.pwConfirmation}
                      onChange={this.handleChange}
                      margin="normal"
                      required
                      error={this.state.pwConfirmationError}
                  />
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="inherit">
                  Cancel
                </Button>
                <Button type="submit" onClick={this.handleSubmit} color="primary">
                  Sign Up
                </Button>
              </DialogActions>
            </form>  
        </Dialog>
        <Snackbar
          className={classes.success}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.openSB}
          autoHideDuration={6000}
          onClose={this.handleCloseSB}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Account Created!</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              className={classes.SBClose}
              onClick={this.handleCloseSB}
            >
              <CloseIcon 
                color="secondary"
              />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}
SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);
