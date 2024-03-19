import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
import Section from "./Section";
import ContactList from "./ContactList";
import Phonebook from "./Phonebook";
import Filter from "./Filter";
import {
  selectContacts,
  addContact,
  deleteContact,
} from "../redux/contactsSlice";
import { setFilter } from "../redux/filtersSlice";


const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(state => state.filters.filter);

  useEffect(() => {
    try {
      const storedContacts = localStorage.getItem("contacts");
      if (storedContacts) {
        dispatch(addContact(JSON.parse(storedContacts)));
      }
    } catch (error) {
      console.error("Error loading contacts from localStorage:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ({ name, number }) => {
    if (!name || !number) {
      alert("Please enter both name and number");
      return;
    }
  
    const normalizedNewName = name.toLowerCase();
    if (
      contacts.find((contact) => contact.name && contact.name.toLowerCase() === normalizedNewName)
    ) {
      alert(`${name} is already in contact`);
      return;
    }
  
    const contact = {
      id: nanoid(),
      name,
      number,
    };
  
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = (e) => {
    const filterValue = e.currentTarget.value;
    if (filterValue !== undefined) {
      dispatch(setFilter(filterValue));
    } else {
      console.error("Value is undefined");
    }
  };

  const filteredContacts = contacts.filter((contact) =>
    typeof contact.name === 'string' && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Section title="Phonebook">
        <Phonebook onSubmit={handleAddContact}></Phonebook>
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={handleFilterChange}></Filter>
        <ContactList
          onDeleteContact={handleDeleteContact}
          contacts={filteredContacts}
        ></ContactList>
      </Section>
    </div>
  );
};

export default App;