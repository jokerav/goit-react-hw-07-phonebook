// import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
// import { getVisibleContacts } from 'redux/selectors';
import {useGetContactsQuery} from '../contactsAPI/contacrsAPI';

const ContactList = () => {
  // const contacts = useSelector(getVisibleContacts);
    const { data:contacts, isloading }  = useGetContactsQuery();

  console.log(contacts);
  return (
    <ul>
      {isloading && <p>"Загружаем контакты"</p>}
      {contacts && contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
