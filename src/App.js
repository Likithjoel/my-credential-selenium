import React, { Component } from 'react';
import CredentialsForm from './components/CredentialsForm';
import CredentialsList from './components/CredentialsList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }
  addToList({ item }) {
    let { list } = this.state;
    let { account, username, password } = item;
    list.push({ account, username, password });
    this.setState({ list });
  }
  render() {
    let { list } = this.state;
    return (
      <div className="App">
        <h1 className="title">My Credentials</h1>
        <CredentialsForm addToList={this.addToList.bind(this)}/>
        <hr />
        { list.length ? <CredentialsList list={list} /> : null }
      </div>
    );
  }
}

export default App;
