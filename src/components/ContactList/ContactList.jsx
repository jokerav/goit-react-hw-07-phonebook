import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { getVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
