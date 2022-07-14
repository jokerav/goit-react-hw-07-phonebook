import Contact from '../Contact/Contact';
// import { useSelector } from 'react-redux';
// import { getVisibleContacts } from '../../contactsAPI/selectors';
import { useGetContactsQuery } from '../../contactsAPI/contactsAPI';

const ContactList = () => {
  const { data: contacts } = useGetContactsQuery();
  // const contacts = useSelector(getVisibleContacts);
  return (
    <ul>
      {contacts &&
        contacts.map(contact => <Contact key={contact.id} contact={contact} />)}
    </ul>
  );
};

export default ContactList;
