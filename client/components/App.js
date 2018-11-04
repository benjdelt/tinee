import React, { Component } from 'react';
// import logo from './logo.svg';
import '../css/App.css';
import Paper from '@material-ui/core/Paper';
import Navbar from './nav';
import NavAuth from './nav-auth';
import Urls from './urls'
import ShortenForm from './shorten-form'
import Signup from './signup';
import Footer from './footer';
class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar></Navbar> */}
        <NavAuth></NavAuth>
        <Paper elevation={3} style={{width: '85%', padding: 25, margin: "20px auto 0"}}>
          <ShortenForm></ShortenForm>
          <Urls></Urls>
          <Footer></Footer>
        </Paper>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
