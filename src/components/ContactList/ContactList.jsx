import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { getFilter } from '../../contactsAPI/selectors';

import { useGetContactsQuery } from '../../contactsAPI/contactsAPI';

const ContactList = () => {
  const { data: contacts } = useGetContactsQuery();
  const filter = useSelector(getFilter);
  console.log(filter, contacts);

  const getVisibleContacts = () => {
    const normFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  console.log(visibleContacts);

  return (
    <ul>
      {visibleContacts.length > 0 &&
        visibleContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};

export default ContactList;
