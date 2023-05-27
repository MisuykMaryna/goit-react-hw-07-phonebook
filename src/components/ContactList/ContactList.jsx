
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';
import {getContacts, getFilter } from 'redux/selectors';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(({ name }) =>
    name && name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts,filter);
  return (
    <ul className={css.contactList}>
      {contacts &&
        visibleContacts.map(({ id, name, number, onClick }) => (
          <ContactItem key={id}
          id={id}
          name={name}
          number={number}
          onClick={() => onClick(id)} />
        ))}
    </ul>
  );
};

