import { useDispatch,useSelector } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const ChangeFilter = e => {
    dispatch (setFilter(e.currentTarget.value));
  }
  const value = useSelector(getFilter);
  return (
    <form>
      <label className={css.filter__label}>
        Find contacts by name
        <input
          className={css.filter__input}
          type="text"
          name="filter"
          value={value}
          placeholder="Type name"
          onChange={ChangeFilter}
        ></input>
      </label>
    </form>
  );
};

