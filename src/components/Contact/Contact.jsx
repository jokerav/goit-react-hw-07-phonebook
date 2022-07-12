import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/actions';
const Contact = ({ contact }) => {
  // const dispatch = useDispatch();
  const {    name,  phone,id  } = contact;
  return (
    <li>
      <p>
        {name} : {phone}
      </p>
      <button
        type="button"
        // onClick={() => dispatch(deleteContact(id))}
      >
        Delete
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
