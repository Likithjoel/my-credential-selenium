import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class CredentialsForm extends Component {
  constructor() {
    super();
    this.state = {
      account: '',
      username: '',
      password: ''
    };
  }
  addToList() {
    let { account, username, password } = this.state;
    let item = { account, username, password };
    account = '';
    username = '';
    password = '';
    this.props.addToList({ item });
    this.setState({ account, username, password });
  }
  render() {
    let { account, username, password } = this.state;
    return (
      <Form className='form'>
        <FormControl className='input' value={account} placeholder='account name (eg. google)'
          onChange={(e) => this.setState({ account: e.target.value })}/>
        <FormControl className='input' value={username} placeholder='user name (eg. bolt)'
          onChange={(e) => this.setState({ username: e.target.value })}/>
        <FormControl className='input' value={password}  placeholder='password'
          onChange={(e) => this.setState({ password: e.target.value })}/>
        <Button className='button' onClick={this.addToList.bind(this)}
          disabled={!(account.length && username.length && password.length)}>
          Save
        </Button>
      </Form>
    );
  }
}

export default CredentialsForm;
