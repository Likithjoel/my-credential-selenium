import React from 'react';
import { mount } from 'enzyme';
import CredentialsForm from './CredentialsForm';

describe('CredentialsForm', () => {
  let credentialsForm = mount(<CredentialsForm />);
  it('creates the credentials form', () => {
    // console.log(credentialsForm.debug());
    expect(credentialsForm.find('Form').exists()).toBe(true);
  });

  it('renders an input field for account name', () => {
    expect(credentialsForm.find('FormControl').at(0).exists()).toBe(true);
  });

  it('renders an input field for username', () => {
    expect(credentialsForm.find('FormControl').at(1).exists()).toBe(true);
  });

  it('renders an input field for password', () => {
    expect(credentialsForm.find('FormControl').at(2).exists()).toBe(true);
  });

  it('renders a save button', () => {
    expect(credentialsForm.find('Button').exists()).toBe(true);
  });

  describe('form filling', () => {
    let test = {
      account: 'test account',
      username: 'test',
      password: 'tset'
    };

    // executes before each it
    beforeEach(() => {
      credentialsForm.find('FormControl').at(0).simulate('change', {
        target: { value: test.account }
      });
      credentialsForm.find('FormControl').at(1).simulate('change', {
        target: { value: test.username }
      });
      credentialsForm.find('FormControl').at(2).simulate('change', {
        target: { value: test.password }
      });
    });

    it('updating values in state', () => {
      expect(credentialsForm.state().account).toEqual(test.account);
      expect(credentialsForm.state().username).toEqual(test.username);
      expect(credentialsForm.state().password).toEqual(test.password);
    });

    // describe('saving the new credentials', () => {
    //   beforeEach(() => {
    //     credentialsForm.find('Button').simulate('click');
    //   })
    // });

  });

});
