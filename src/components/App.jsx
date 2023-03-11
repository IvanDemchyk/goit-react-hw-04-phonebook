import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Container, MainTitle, ListTitle } from './Layout/Layout.styled';
import { GlobalStyle } from './GlobalStyle';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    const parsedContacts = JSON.parse(savedContacts);

    return parsedContacts;
  }
  return [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts([...contacts, newContact]);
  };

  const onFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const onFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSave={addContact} contacts={contacts} />
      <ListTitle>Contacts</ListTitle>
      <Filter onFilter={onFilter} filter={filter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        filterContacts={onFilterContacts}
        onDelete={onDelete}
      />
      <GlobalStyle />
    </Container>
  );
};
