
import {useGetContactsQuery,useAddContactMutation} from '../contactsAPI/contactsAPI';
import { useState } from 'react';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { data:contacts} = useGetContactsQuery();
  console.log(contacts);
  const [addContact] = useAddContactMutation();

  const onChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        return;
    }
  };
  const isNameInPhonebook = name => {
    const nameInLowerCase = name.toLowerCase();
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === nameInLowerCase) {
        return true;
      }
    }
    return false;
  };
  const onSubmit = e => {
    e.preventDefault();
    if (!isNameInPhonebook(name)) {
      (addContact({ name, phone }));
      setName('');
      setPhone('');
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input
          value={name}
          onChange={onChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          value={phone}
          onChange={onChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
export default ContactForm;
