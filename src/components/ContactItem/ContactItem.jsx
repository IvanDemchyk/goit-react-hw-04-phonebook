import PropTypes from 'prop-types';
import { Item, DelBtn } from './ContactItem.styled';

export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <Item>
      <span>{name}</span>
      <span>{number}</span>
      <DelBtn type="button" onClick={() => onDelete(id)}>
        Delete
      </DelBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
