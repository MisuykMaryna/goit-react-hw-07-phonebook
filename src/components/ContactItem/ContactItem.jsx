import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';
import { deleteContact } from 'redux/operations';


export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  }
  return (
    <li className={css.contactItem}>
      {name}: {number}
      <button className={css.contactItem__button}type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

