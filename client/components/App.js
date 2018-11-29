import React, { Component } from 'react';
// import logo from './logo.svg';
import '../css/App.css';
import Paper from '@material-ui/core/Paper';
import Navbar from './nav';
import NavAuth from './nav-auth';
import Urls from './urls'
import UrlUnauth from './url-unauth';
import ShortenForm from './shorten-form'
import Footer from './footer';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      longUrl: '',
      shortUrl: '',
      createdAt: '',
    }
    this.setUrlData = this.setUrlData.bind(this);
  }

  setUrlData(data) {
    if (data) {
      this.setState({
        longUrl: data.longVersion,
        shortUrl: data.shortVersion,
        createdAt: data.createdAt,
      })
    } else {
      this.setState({
        longUrl: '',
        shortUrl: '',
        createdAt: '',
      }) 
    }
  }

  render() {
    return (
      <div>
        {/* <Navbar></Navbar> */}
        <NavAuth></NavAuth>
        <Paper elevation={3} style={{width: '85%', padding: 25, margin: "20px auto 0"}}>
          <ShortenForm setUrlData={this.setUrlData} ></ShortenForm>
          {/* <Urls></Urls> */}
          <UrlUnauth 
            longUrl={this.state.longUrl} 
            shortUrl={this.state.shortUrl}
            createdAt={this.state.createdAt}
            >
          </UrlUnauth>
          <Footer></Footer>
        </Paper>
      </div>
    );
  }
}

export default App;
