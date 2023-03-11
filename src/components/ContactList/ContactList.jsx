import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ filterContacts, onDelete }) => {
  return (
    <List>
      {filterContacts().map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
