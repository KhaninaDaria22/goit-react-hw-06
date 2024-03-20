import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";
import css from "../css/ContactList.module.css";
import PropTypes from 'prop-types';


const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.ulContacts}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <div>
            <p>{name}: </p>
            <p>{number}</p>
          </div>
          <button className={css.buttonContacts} type="button" onClick={() => handleDeleteClick(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default ContactList;