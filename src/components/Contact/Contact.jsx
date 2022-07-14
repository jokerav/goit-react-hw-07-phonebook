import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../contactsAPI/contactsAPI';
const Contact = ({ contact }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const { name, phone, id } = contact;
  return (
    <li>
      <p>
        {name} : {phone}
      </p>
      <button type="button" onClick={() => deleteContact(id)}>
        {isDeleting ? 'Удаляем...' : 'Удалить'}
      </button>
    </li>
  );
};
export default Contact;
Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
