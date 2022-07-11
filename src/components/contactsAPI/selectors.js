export const getfilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;
export const getVisibleContacts = state => {
  const filter = getfilter(state);
  const contacts = getContacts(state);
  const normFilter = filter.toLowerCase();
  return contacts.filter(({ name }) => name.toLowerCase().includes(normFilter));
};
