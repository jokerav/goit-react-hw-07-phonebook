import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { getFilter } from '../../contactsAPI/selectors';
import { useGetContactsQuery } from '../../contactsAPI/contactsAPI';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  console.log(filter, contacts);

  // const getVisibleContacts = () => {
  //   const normFilter = filter.toLowerCase();
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normFilter)
  //   );
  // };

  // const visibleContacts = getVisibleContacts();
  // console.log(visibleContacts);

  return (
    <ul>
      {isLoading && <p>Грузим...</p>}
      {error && <p>Ошибочка...</p>}
      {contacts &&
        contacts.map(contact => <Contact key={contact.id} contact={contact} />)}
    </ul>
  );
};

export default ContactList;
