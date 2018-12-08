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
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      longUrl: '',
      shortUrl: '',
      createdAt: '',
    }
    this.setUrlData = this.setUrlData.bind(this);
    this.setUserId = this.setUserId.bind(this);
  }

  setUserId(userId) {
    this.setState({userId: userId});
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

  componentDidMount() {
    axios.get('/users/sessions')
      .then(res => {
        this.setState({userId: res.data})
      })
  }

  render() {
    return (
      <div>
        {
          this.state.userId ?
            <Navbar />
            :
            <NavAuth setUserId={this.setUserId} />
        }
        {/* <Paper elevation={3} style={{width: '85%', padding: 25, margin: "20px auto 0"}}> */}
          <ShortenForm setUrlData={this.setUrlData} />
          {
            this.state.userId ?
              <Urls />
              :
              <UrlUnauth 
                longUrl={this.state.longUrl} 
                shortUrl={this.state.shortUrl}
                createdAt={this.state.createdAt}
              />
          }
          <Footer />
        {/* </Paper> */}
      </div>
    );
  }
}

export default App;
