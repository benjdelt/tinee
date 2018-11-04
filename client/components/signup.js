import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

const styles = theme => ({
  paper : {
    visibility: 'hidden',
    width: '40%', 
    height: '100%', 
    padding: 25, 
    margin: "10px auto 0",
    '@media (min-width: 1200px)': {
      margin: "20px auto 0",
      visibility: 'visible',
    }
  },
  container: {
    visibility: 'visible',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // flexWrap: 'wrap',
    '@media (min-width: 1200px)': {
      marginTop: '150px',
      marginBottom: '150px',
    }
  },
  shortenForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',

  },
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
    };
    // this.handleClickOpen = this.handleClickOpen.bind(this);
    // this.handleClickClose = this.handleClickClose.bind(this);
  }
  
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

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
            {"Sign Up"}
          </DialogTitle>
            <form>
              <DialogContent>
                <DialogContentText>
                  <TextField
                      label = "Email" 
                      name = "email"
                      type= "email"
                      className={classes.textField}
                      // value={this.state.name}
                      // onChange={this.handleChange('name')}
                      margin="normal"
                      required
                  />
                  <TextField
                      label = "Password" 
                      name = "password"
                      type="password"
                      className={classes.textField}
                      // value={this.state.name}
                      // onChange={this.handleChange('name')}
                      margin="normal"
                      required
                  />
                  <TextField
                      label = "Confirm Password" 
                      name = "password-confirmation"
                      type="password"
                      className={classes.textField}
                      // value={this.state.name}
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
                <Button type="submit" onClick={this.handleClose} color="primary">
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
