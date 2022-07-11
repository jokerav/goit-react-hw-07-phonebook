// import { useSelector } from 'react-redux';
// import Contact from '../Contact/Contact';
// import { getVisibleContacts } from 'redux/selectors';
import { useGetContactsByIDQuery } from '../contactsAPI/contacrsAPI';

const ContactList = () => {
  // const contacts = useSelector(getVisibleContacts);
  const {
    data,
    // , error, isLoading
  } = useGetContactsByIDQuery('1');
  console.log(data);
  return (
    <ul>
      {/* {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))} */}
    </ul>
  );
};

export default ContactList;
