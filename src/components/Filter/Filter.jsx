import PropTypes from 'prop-types';
import { FilterBox, FilterLabel } from './Filter.styled';

export const Filter = ({ filter, onFilter }) => {
  return (
    <FilterBox>
      <FilterLabel htmlFor="filter">
        Find contacts by name
        <input type="text" name="filter" value={filter} onChange={onFilter} />
      </FilterLabel>
    </FilterBox>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
