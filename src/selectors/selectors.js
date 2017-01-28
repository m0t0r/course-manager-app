export function formatAuthorsForDropdown(authors) {
  return authors.map(a => ({value: a.id, text: `${a.firstName} ${a.lastName}`}));
}
