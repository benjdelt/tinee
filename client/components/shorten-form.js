import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class ShortenForm extends Component {
  render() {
    return (
      <form>
        <TextField
            label = "Paste a link to shorten it" 
            name = "longUrl"
            // className={classes.textField}
            // value={this.state.name}
            // onChange={this.handleChange('name')}
            // margin="normal"
        />
        <Button variant="contained" color="primary">Shorten</Button>
      </form>
    )
  }
}

export default ShortenForm;