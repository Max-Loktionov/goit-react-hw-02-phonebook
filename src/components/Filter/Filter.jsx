import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  const filterId = nanoid();

  return (
    <label htmlFor={filterId}>
      {' '}
      Find contacts by name
      <input
        name="filter"
        value={value}
        onChange={onChange}
        id={filterId}
        type="text"
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
export default Filter;
