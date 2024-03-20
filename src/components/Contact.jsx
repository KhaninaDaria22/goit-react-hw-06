import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";
import css from "../css/ContactList.module.css";
import PropTypes from "prop-types";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      <div>
        <p>{name}: </p>
        <p>{number}</p>
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
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;