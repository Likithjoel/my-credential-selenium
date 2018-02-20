import React from 'react';
import { mount } from 'enzyme';
import ListItem from './ListItem';

const props = {
    index: 0,
    item: {
      account: 'test account',
      username: 'test',
      password: 'tset'
    }
};

describe('ListItem', () => {
  let listItem = mount(<ListItem { ...props } />);
  it('creates the list item', () => {
    // console.log(listItem.debug());
    expect(listItem.find('tr').exists()).toBe(true);
  });

  it('renders the index', () => {
    // leading + is to convert the value of text() from string to int
    expect(+listItem.find('td').at(0).text()).toEqual(props.index + 1);
  });

  it('renders the account name', () => {
    expect(listItem.find('td').at(1).text()).toEqual(props.item.account);
  });

  it('renders the username', () => {
    expect(listItem.find('td').at(2).text()).toEqual(props.item.username);
  });

  it('renders the password', () => {
    expect(listItem.find('td').at(3).text()).toEqual(props.item.password);
  });
});
