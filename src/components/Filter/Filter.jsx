import { changeFilter } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { getfilter } from 'redux/selectors';

export default function Filter() {
  const value = useSelector(getfilter);
  const dispatch = useDispatch();
  return (
    <label>
      Find contacts by name
      <input
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </label>
  );
}
