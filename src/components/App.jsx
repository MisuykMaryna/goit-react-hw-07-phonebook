import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { selectError, selectIsLoading } from 'redux/selectors';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
   const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


    return (
      <div className={css.container}>
         <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.title}>Contacts</h2>
        <Filter />
         {isLoading && !error && (
          <b className={css.title}>Request in progress...</b>
        )}
         <ContactList />
      </div>
   )
  };
