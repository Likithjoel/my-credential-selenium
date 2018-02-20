import React from 'react';
import { mount } from 'enzyme';
import CredentialsList from './CredentialsList';

const props = {
    list: [
      {
        account: 'test account 1',
        username: 'test',
        password: 'tset'
      },
      {
        account: 'test account 2',
        username: 'test',
        password: 'tset'
      }
    ]
};

describe('CredentialsList', () => {
  let credentialsList = mount(<CredentialsList { ...props } />);
  it('creates the credentials list', () => {
    // console.log(credentialsList.debug());
    expect(credentialsList.find('Table').exists()).toBe(true);
  });
});
