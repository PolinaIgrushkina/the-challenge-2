import React from 'react';

export const Item = ({ data }) => {
  const { label, children } = data;

  return (
    <ul>
      <li style={{ paddingLeft: 10 }}>{label}</li>
      {children && children.map(item => <Item data={item} key={item.id} />)}
    </ul>
  );
};
