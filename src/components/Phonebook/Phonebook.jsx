import {useState} from "react";
import { Label, Form, Input, Button } from "./Phonebook.styled";

    const Phonebook = ({onSubmit}) => {
      const [name, setName] = useState('');
      const [number, setNumber] = useState('');
    

//відповідає за оновлення стану 
   const handleNameChange = (e) => {
        const {value} = e.currentTarget;
        setName(value);
    };

    const handleNumberChange = (e) => {
      const { value} = e.currentTarget;
      setNumber(value);
    };


  const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({name, number});
        setName('');
        setNumber('');
        console.log("Form", {name, number});
    };

//рендер вихідної розмітки форми
        return (
            <div>
              {/* Форма для введення імені контакту */}
              <Form onSubmit={handleSubmit}>
                <Label>
                  Name
                  <Input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={handleNameChange}
                    required
                  />
                </Label>
                <Label>
                  Number
                  <Input
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleNumberChange }/>
                </Label>
                {/* Кнопка для додавання контакту */}
                <Button type="submit">
                  Add contact 
                </Button>
              </Form>
            </div>
          );
     };

export default Phonebook;

    