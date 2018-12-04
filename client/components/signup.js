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
});


class SignUp extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
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
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
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
    if(!value) {
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

  handleSubmit(event) {
    event.preventDefault();
    // console.log('email', this.state.email);
    // console.log('pw', this.state.password);
    // console.log('pwc', this.state.pwConfirmation);
    if (this.checkEmpty('email', this.state.email) || this.checkEmpty('password', this.state.password) || this.checkEmpty('pwConfirmation', this.state.pwConfirmation)) {
      return;
    }
    if (this.state.password !== this.state.pwConfirmation) {
      console.log('Password and confirmation must match');
      this.setState({
        password: '',
        pwConfirmation: '',
        pwConfirmationLabel: "Passwords don't match",
        pwConfirmationError: true,
      })
      return;
    }
    axios.post('/users', {
      email: this.state.email,
      password: this.state.password,
    }).then(res => console.log(res));
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
  }

  render() {

    const { classes } = this.props;

    return (
      <span>
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
      </span>
    );
  }
}
SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);
