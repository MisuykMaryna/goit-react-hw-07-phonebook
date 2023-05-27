import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { onDelete } from 'redux/contactsSlice';


export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(onDelete(id));
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

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};