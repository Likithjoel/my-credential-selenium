import React from 'react';

let ListItem = ({ item, index }) => (
  <tr key={index}>
    <td>{index + 1}</td>
    <td>{item.account}</td>
    <td>{item.username}</td>
    <td>{item.password}</td>
  </tr>
);

export default ListItem;
