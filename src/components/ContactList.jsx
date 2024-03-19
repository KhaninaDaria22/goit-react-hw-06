// import React from 'react';
// import { List, ListItem, ItemWrapper, Button } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return(
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <div>
            <p>{name}: </p>
            <p>{number}</p>
          </div>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;