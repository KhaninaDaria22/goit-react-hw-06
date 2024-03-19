// import React from 'react';
// import { List, ListItem, ItemWrapper, Button } from './ContactList.styled';
import css from '../css/ContactList.module.css'


const ContactList = ({ contacts, onDeleteContact }) => {
  return(
    <ul className={css.ulContacts}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <div>
            <p>{name}: </p>
            <p>{number}</p>
          </div>
          <button className={css.buttonContacts} type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;