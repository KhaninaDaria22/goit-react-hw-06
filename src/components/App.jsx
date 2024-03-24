import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import css from "../css/App.module.css"

function App () {
  return (
    <div>
      <section className={css.section}>
        <h1>Phonebook</h1>
        <ContactForm/>
      </section>
      <section className={css.section}>
        <h1>Contacts</h1>
        <SearchBox />
        <ContactList />
      </section>
    </div>
  );
}

export default App;