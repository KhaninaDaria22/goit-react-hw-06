import PropTypes from "prop-types";
import css from "../css/ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";

const Contact = ({ id }) => {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contacts.contacts.find(contact => contact.id === id));

  const handleDeleteClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      <div>
        <p>{contact.name}: </p>
        <p>{contact.number}</p>
      </div>
      <button
        className={css.buttonContacts}
        type="button"
        onClick={handleDeleteClick}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Contact;