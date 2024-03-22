import css from "../css/ContactList.module.css";
import Contact from "./Contact"
import {  useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <ul className={css.ulContacts}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;