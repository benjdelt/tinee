import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
    margin: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    width: 200,
    display: 'block',
  },
  searchButton: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    width: 200,
    display: 'block',
  },
  menu: {
    // width: 200,
  },
});
class ShortenForm extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
        </Grid>
        <Grid item xs={12} sm={4}>
          <form className={classes.shortenForm}>
            <TextField
                label = "Paste a link to shorten it" 
                name = "longUrl"
                className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                // margin="normal"
            />
            <Button className={classes.searchButton}variant="contained" color="primary">Shorten</Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={4}>
        </Grid>
      </Grid>
    )
  }
}

ShortenForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShortenForm);