import React, { Component } from 'react';
// import logo from './logo.svg';
import '../css/App.css';
import Navbar from './nav';
import Urls from './urls'
import Footer from './footer';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Urls></Urls>
        {/* <Footer></Footer> */}
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
