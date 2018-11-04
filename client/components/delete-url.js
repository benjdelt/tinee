import React from 'react';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import orange from '@material-ui/core/colors/orange';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  
})

const theme = createMuiTheme({
  palette: {
    secondary: orange,
  },
});

class DeleteUrl extends React.Component {
  
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
      <MuiThemeProvider theme={theme}>
        <Button onClick={this.handleClickOpen} variant="outlined" color="secondary"><Delete />Delete</Button>
        <Dialog
          open={this.state.open}
          keepMounted
          onClose={this.handleClose}
        >
          <DialogTitle style={{textAlign: 'center'}}>
            {"Delete URL"}
          </DialogTitle>
            <form>
              <DialogContent>
                <DialogContentText>
                  Are you sure?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="inherit">
                  Cancel
                </Button>
                <Button type="submit" onClick={this.handleClose} variant="outlined" color="secondary">
                  Delete
                </Button>
              </DialogActions>
            </form>  
        </Dialog>
      </MuiThemeProvider>
    );
  }
}

DeleteUrl.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeleteUrl);