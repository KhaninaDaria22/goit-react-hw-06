import PropTypes from "prop-types";
import css from "../css/ContactList.module.css";
import Contact from "./Contact"

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.ulContacts}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;