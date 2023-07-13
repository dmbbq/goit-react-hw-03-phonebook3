import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onChange,filter }) => {
  const handleInputChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <input
      value={filter}
      type="text"
      onChange={handleInputChange}
      placeholder="Search contacts"
    />
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;