import React, { Component } from 'react';
import logo from './logo.svg';
import First from './comp/First';
import List from './comp/List';
import Chart from './comp/Chart';
import { connect } from "react-redux";

import './App.css';

class App extends Component {
  //{this.props.user.showlist ? <Register/> : null} {this.props.user.showlist ? <List/> : null}
  render() {
console.log(this.props.user.showlist );
    return (
      <div className="App">


        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          </header>
          <div>
                <First/>

                 {this.props.user.showlist ? <Chart/> : null}


                 {this.props.user.showlist ? <List/> : null}
            </div>



      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log();
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(App);
