const getfilter = state => state.filter;

const getContacts = state =>
  state.contactsAPI.queries.getContacts(undefined).data;

const getVisibleContacts = state => {
  const filter = getfilter(state);
  const contacts = getContacts(state);
  const normFilter = filter.toLowerCase();
  return contacts.filter(({ name }) => name.toLowerCase().includes(normFilter));
};
export { getfilter, getContacts, getVisibleContacts };
