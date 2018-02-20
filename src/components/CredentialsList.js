import React from 'react';
import { Table } from 'react-bootstrap';
import ListItem from './ListItem';

let CredentialsList = ({ list }) => (
  <Table striped>
    <thead>
      <tr>
        <th>#</th>
        <th>Account Name</th>
        <th>User Name</th>
        <th>Password</th>
      </tr>
    </thead>
    <tbody>
      { list.map((item, index) => <ListItem key={index} index={index} item={item} />) }
    </tbody>
  </Table>
);

export default CredentialsList;
