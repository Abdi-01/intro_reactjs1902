import React from 'react'
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home'
import Navbar from './components/Navbar';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Navbar/>
        <h1>Page App Intro React JS</h1>
        <HomePage />
      </div>
    )
  }

}

export default App;
