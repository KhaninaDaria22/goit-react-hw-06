import { useSelector, useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import {
  selectContacts,
  addContact,
  deleteContact,
} from "../redux/contactsSlice";
import { setFilter } from "../redux/filtersSlice";
import css from "../css/App.module.css"

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(state => state.filters.filter);

  const handleAddContact = ({ name, number }) => {
    if (!name.trim() || !number.trim()) {
      alert('Please enter both name and number');
      return;
    }

    const normalizedNewName = name.trim().toLowerCase();
    if (contacts.some(contact => contact.name.toLowerCase() === normalizedNewName)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(contact));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = e => {
    const filterValue = e.currentTarget.value;
    dispatch(setFilter(filterValue));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <section className={css.section}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleAddContact} />
      </section>
      <section className={css.section}>
        <h1>Contacts</h1>
        <SearchBox value={filter} onChange={handleFilterChange} />
        <ContactList onDeleteContact={handleDeleteContact} contacts={filteredContacts} />
      </section>
    </div>
  );
};

export default App;