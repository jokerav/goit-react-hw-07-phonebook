import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { getVisibleContacts } from '../../contactsAPI/selectors';
// import {useGetContactsQuery} from '../../contactsAPI/contactsAPI';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
    // const { data:contacts, isloading }  = useGetContactsQuery();
  return (
    <ul>
       {contacts.length>0 && contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
