import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { getFilter } from '../../contactsAPI/selectors';
import { useGetContactsQuery } from '../../contactsAPI/contactsAPI';
const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data: contacts = [], error, isLoading } = useGetContactsQuery();

  const getVisibleContacts = () => {
    const normFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {isLoading && <p>Грузим...</p>}
      {error && <p>Ошибочка...</p>}
      {visibleContacts.length > 0 &&
        visibleContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};

export default ContactList;
