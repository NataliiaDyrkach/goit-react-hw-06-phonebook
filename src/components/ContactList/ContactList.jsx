import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, deleteContact, } from 'redux/contactsSlice';


function ContactList() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const deleteSelectedContact = id => dispatch(deleteContact(id));

  const filterdContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const filteredContactList = filterdContacts();

  return (
    <ul>
      {filteredContactList.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <p>{name}:</p>
            <p>{number}</p>
            <button
              className={css.button}
              type="button"
              onClick={() => deleteSelectedContact(id)}
              id={id}
            >
              Delite
            </button>
          </li>
        );
      })}
    </ul>
  );
}


export default ContactList;
