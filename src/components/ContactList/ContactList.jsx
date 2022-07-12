// import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
// import { getVisibleContacts } from 'redux/selectors';
import {useGetContactsByIDQuery,useGetContactsQuery} from '../contactsAPI/contacrsAPI';

const ContactList = () => {
  // const contacts = useSelector(getVisibleContacts);
    const { data:contacts, error, isloading }  = useGetContactsQuery();

  console.log(contacts);
  return (
    <ul>
       {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
