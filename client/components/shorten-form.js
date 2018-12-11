import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({  
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
  },
  shortenForm: {
    marginBottom: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  textField: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing.unit * 2,
    width: 200,
    display: 'block',
  },
  searchButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200,
    display: 'block',
  },
});
class ShortenForm extends Component {
  constructor (props) {
    super(props);
    this.state ={
      value: '',
      label: 'Paste a link to shorten it', 
      error: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

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
    if (!this.state.value.match(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/)) {
      this.setState({
        label: "Invalid URL format",
        error: true
      })
      return;
    }
    axios.post('/urls', {
      longUrl: this.state.value,
    }).then(res => {
      if (res.data.name === "MongoError" || res.data.errors) { // TODO: separate in 2 errors
        this.setState({
          label: 'Something went wrong, please try again',
          error: true
        })
      } else {
        this.props.setUrlData(res.data);
        this.setState({
          value: '',
          label: 'Paste a link to shorten it', 
          error: false,
        });
      }
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={24}>
        <Grid item xs={0} sm={4}>
        </Grid>
        <Grid item xs={12} sm={4}>
          <form className={classes.shortenForm} onSubmit={this.handleSubmit}>
            <TextField
              label = {this.state.label}
              error = {this.state.error} 
              name = "value"
              className={classes.textField}
              value={this.state.value}
              onChange={this.handleChange}
              margin="normal"
            />
            <Button 
              type="submit" 
              className={classes.searchButton} 
              variant="contained" 
              color="primary"
            >
              Shorten
            </Button>
          </form>
        </Grid>
        <Grid item xs={0} sm={4}>
        </Grid>
      </Grid>
    )
  }
}

ShortenForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShortenForm);