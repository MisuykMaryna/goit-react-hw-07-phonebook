
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectVisibleContacts } from 'redux/selectors';


export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  
  return (
    <ul className={css.contactList}>
      {contacts &&
        contacts.map(({ id, name,  phone, onClick }) => (
          <ContactItem key={id}
          id={id}
          name={name}
          number={ phone }
          onClick={() => onClick(id)} />
        ))}
    </ul>
  );
};

