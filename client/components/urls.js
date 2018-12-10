import React, {Component} from 'react';
import MicrolinkCard from 'react-microlink';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Copy from '@material-ui/icons/FileCopy';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import classNames from 'classnames';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from 'axios';

import CopyUrl from './copy-url';
import EditUrl from './edit-url';
import DeleteUrl from './delete-url';


const styles = theme => ({
  shortButton: {
    textTransform: 'none',
  },
})

// const theme = createMuiTheme({
//   palette: {
//     secondary: orange,
//   },
// });

class Urls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
    }
    this.updateUrl = this.updateUrl.bind(this);
  }

  getUrls() {
    axios.get('/urls')
      .then(res => this.setState({ urls: res.data }));
  }

  updateUrl(url) {
    const newUrls = this.state.urls.splice()
    const newIndex = newUrls.forEach((u, i) => {
      if (u._id === url._id) {
        return i;
      }
      return -1;
    })
    newUrls[newIndex] = url;
    this.setState({
      urls: newUrls
    })
  }

  componentDidMount() {
    this.getUrls();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newUrl) {
      this.getUrls();
    }
  }
  
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24} justify="space-evenly">
        {this.state.urls.map(url => {
          return (
            <Grid key={url._id} item xs={12} sm={6} md={4}>
      
              <Typography variant='caption'>{url.createdAt}</Typography>
              <MicrolinkCard
                url={url.longVersion}
                target='_blank'
              />
              <Button 
                color="primary" 
                variant="outlined"
                className={classes.shortButton}
                href={'/u/' + url.shortVersion}
                target="_blank"
              >
                /u/{url.shortVersion}
              </Button>
              <CopyUrl shortUrl={url.shortVersion}></CopyUrl>
              <EditUrl 
                url={url} 
                setUrlData={this.props.setUrlData} 
                updateUrl={this.updateUrl} 
              >
              </EditUrl>
              <DeleteUrl></DeleteUrl>
            </Grid>
          )

        })}
        
      </Grid>
    )
  }
}
Urls.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Urls);
