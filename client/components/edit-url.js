import React from 'react';
import axios from 'axios';
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

class EditUrl extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      open: false,
      label: 'Long URL',
      value: '',
      error: false,
    };
    // this.handleClickOpen = this.handleClickOpen.bind(this);
    // this.handleClickClose = this.handleClickClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleClose = () => {
    this.setState({ 
      open: false,
      value: this.props.url.longVersion,
      label: 'Long URL',
      error: false
     });
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios.post(`urls/${this.props.url._id}`, {
  //     longUrl: this.state.value
  //   }).then(res => console.log(res));
  // }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setUrlData();
    if (!this.state.value) {
      this.setState({
        label: 'The field cannot be empty',
        error: true
      })
      return;
    }
    axios.post(`urls/${this.props.url._id}`, {
      longUrl: this.state.value,
    }).then(res => {
      if (res.data.name === "MongoError" || res.data.errors) { // TODO: separate in 2 errors
        this.setState({
          label: 'Something went wrong, please try again',
          error: true
        })
      } else {
        console.log(res.data)
        this.props.setUrlData(res.data);
        this.props.updateUrl(res.data); 
        this.setState({
          value: '',
          label: 'Long URL', 
          error: false,
        });
        this.handleClose();
      }
    })
  }

  componentDidMount() {
    this.setState({ value: this.props.url.longVersion })
  }

  render() {
    return (
      <span>
        <Button onClick={this.handleClickOpen} color="primary"><Edit />Edit</Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
        >
          <DialogTitle style={{textAlign: 'center'}}>
            Edit URL
          </DialogTitle>
            <form onSubmit={this.handleSubmit} >
              <DialogContent>
                <DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    label={this.state.label}
                    fullWidth
                    onChange={this.handleChange}
                    value={this.state.value}
                    error={this.state.error}
                  />
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="inherit">
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Update
                </Button>
              </DialogActions>
            </form>  
        </Dialog>
      </span>
    );
  }
}

export default EditUrl;
