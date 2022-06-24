import React from 'react';
import PropTypes from 'prop-types';

export default function Select({ id, array, name, title, testId }) {
  return (
    <label htmlFor={ id }>
      { title }
      <select id={ id } name={ name } data-testid={ testId }>
        {
          array.map((item, index) => (
            <option key={ index } value={ item }>
              {item}
            </option>
          ))
        }
      </select>
    </label>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
