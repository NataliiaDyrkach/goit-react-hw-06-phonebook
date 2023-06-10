import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from 'redux/contactsSlice';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFieldFilter = event =>
    dispatch(changeFilter(event.currentTarget.value));

  return (
    <>
      <h2 className={css.text}>Contacts</h2>
      <p className={css.text}>Find contacts by name</p>
      <label className={css.label}>
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={changeFieldFilter}
        />
      </label>
    </>
  );
}


export default Filter;
