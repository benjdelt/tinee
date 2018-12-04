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
      password: '',
      pwConfirmation: '',
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

  handleSubmit(event) {
    event.preventDefault();
    console.log('email', this.state.email);
    console.log('pw', this.state.password);
    console.log('pwc', this.state.pwConfirmation);
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
                      label = "Email" 
                      name = "email"
                      type= "email"
                      className={classes.textField}
                      // value={this.state.name}
                      onChange={this.handleChange}
                      margin="normal"
                      required
                  />
                  <TextField
                      label = "Password" 
                      name = "password"
                      type="password"
                      className={classes.textField}
                      // value={this.state.name}
                      onChange={this.handleChange}
                      // onChange={this.handleChange('name')}
                      margin="normal"
                      required
                  />
                  <TextField
                      label = "Confirm Password" 
                      name = "pwConfirmation"
                      type="password"
                      className={classes.textField}
                      // value={this.state.name}
                      onChange={this.handleChange}
                      // onChange={this.handleChange('name')}
                      margin="normal"
                      required
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
