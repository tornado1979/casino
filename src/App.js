import React, { Component } from 'react';
import './App.css';
import './css/index.scss'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
