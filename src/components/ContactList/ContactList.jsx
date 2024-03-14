// import React from 'react';
import { List, ListItem, ItemWrapper, Button } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return(
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ItemWrapper>
            <p>{name}: </p>
            <p>{number}</p>
          </ItemWrapper>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;