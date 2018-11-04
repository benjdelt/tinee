// <form className={classes.shortenForm}>
//             <TextField
//                 label = "Email" 
//                 name = "email"
//                 type= "email"
//                 className={classes.textField}
//                 // value={this.state.name}
//                 // onChange={this.handleChange('name')}
//                 margin="normal"
//                 required
//             />
//             <TextField
//                 label = "Password" 
//                 name = "password"
//                 type="password"
//                 className={classes.textField}
//                 // value={this.state.name}
//                 // onChange={this.handleChange('name')}
//                 margin="normal"
//                 required
//             />
//             <TextField
//                 label = "Confirm Password" 
//                 name = "password-confirmation"
//                 type="password"
//                 className={classes.textField}
//                 // value={this.state.name}
//                 // onChange={this.handleChange('name')}
//                 margin="normal"
//                 required
//             />
//             <Button className={classes.searchButton}variant="contained" color="primary">Sign Up</Button>

import React from 'react';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Create';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class Signup extends React.Component {
  
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
    return (
      <span>
        <Button onClick={this.handleClickOpen} color="inherit">Sign Up</Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
        >
          <DialogTitle>
            {"Sign Up"}
          </DialogTitle>
            <form>
              <DialogContent>
                <DialogContentText>
                  <TextField
                      label = "Email" 
                      name = "email"
                      type= "email"
                      // className={classes.textField}
                      // value={this.state.name}
                      // onChange={this.handleChange('name')}
                      margin="normal"
                      required
                  />
                  <TextField
                      label = "Password" 
                      name = "password"
                      type="password"
                      // className={classes.textField}
                      // value={this.state.name}
                      // onChange={this.handleChange('name')}
                      margin="normal"
                      required
                  />
                  <TextField
                      label = "Confirm Password" 
                      name = "password-confirmation"
                      type="password"
                      // className={classes.textField}
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

export default Signup;
