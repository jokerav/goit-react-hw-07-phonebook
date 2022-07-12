import PropTypes from 'prop-types';
import {useDeleteContactMutation} from '../contactsAPI/contacrsAPI';
const Contact = ({ contact }) => {
  const [deleteContact, {isLoading:isDeleting}] = useDeleteContactMutation();
  // const dispatch = useDispatch();
  const {    name,  phone,id  } = contact;
  return (
    <li>
      <p>
        {name} : {phone}
      </p>
      <button
        type="button"
        onClick={() =>deleteContact(id)}
      >
        {isDeleting? 'Удаляем...' : 'Удалить'}
      </button>
    </li>
  );
};
export default Contact;
Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
