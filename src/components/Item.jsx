import React from 'react';
import PropTypes from 'prop-types';

export const Item = ({ label, children }) => {
  return (
    <li>
      {label}
      {children}
    </li>
  );
};

Item.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};
