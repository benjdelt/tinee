import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { media } from 'react-microlink/lib/utils';


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
  searchButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200,
    display: 'block',
  },
});
class ShortenForm extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper elevation={3} className={classes.paper} style={{}}>
      <Grid container spacing={24} className={classes.container}>
        <Grid item xs={0} sm={4}>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="display1" className={classes.formText}>
            Register
          </Typography>
          <form className={classes.shortenForm}>
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
            <Button className={classes.searchButton}variant="contained" color="primary">Sign Up</Button>
          </form>
        </Grid>
        <Grid item xs={0} sm={4}>
        </Grid>
      </Grid>
      </Paper>
    )
  }
}

ShortenForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShortenForm);