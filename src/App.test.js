import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let app = mount(<App />);
  it('renders title', () => {
    expect(app.find('h1').text()).toEqual('My Credentials');
  });

  it('renders the credentials form', () => {
    expect(app.find('CredentialsForm').exists()).toBe(true);
  });

  // it('renders the credentials list', () => {
  //   expect(app.find('CredentialsList').exists()).toBe(true);
  // });

});
