import ContactForm from './ContactsForm/ContactForm';
import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
export const App = () => {
  return (
    <div
      style={{
        fontSize: 22,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
       <ContactForm />
      {/* <Filter />*/}
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};
