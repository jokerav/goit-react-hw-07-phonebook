
export const getfilter = state => state.filter;
export const  getContacts = state => state.contactsApi.queries.getContacts.data;

export const getVisibleContacts = async state => {
  const filter = getfilter(state);
  const contacts = await getContacts(state);
  const normFilter = filter.toLowerCase();
  return contacts.filter(({ name }) => name.toLowerCase().includes(normFilter));
};
