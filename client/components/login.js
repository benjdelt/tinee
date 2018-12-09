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


class LogIn extends React.Component {
  
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
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleOpen() {
    this.setState({ open: true });
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleClose() {
    this.setState({ open: false });
  };

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
    if (this.checkEmpty('password', this.state.password)) {
      return;
    }
    axios.post('users/sessions', {
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      if (res.data === 'Invalid Credentials') {
        this.setState({
          emailLabel: 'Invalid Credentials',
          emailError: true,
          passwordLabel: 'Invalid Credentials',
          passwordError: true
        })
      } else {
        this.setState({
          email: '',
          emailLabel: 'Email',
          emailError: false,
          password: '',
          passwordLabel: 'Password',
          passwordError: false
        })
        this.props.setUserId(res.data)
        this.handleClose();
      }
    });
  }
 
  render() {

    const { classes } = this.props;

    return (
      <span>
        <Button onClick={this.handleOpen} color="inherit">Log In</Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
        >
          <DialogTitle className={classes.formText}>
            Log In
          </DialogTitle>
            <form>
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
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="inherit">
                  Cancel
                </Button>
                <Button type="submit" onClick={this.handleSubmit} color="primary">
                  Log In
                </Button>
              </DialogActions>
            </form>  
        </Dialog>
      </span>
    );
  }
}
LogIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LogIn);
