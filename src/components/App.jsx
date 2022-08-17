
// import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
// import { useState } from "react";
// import { useEffect } from "react";

const  App = () => {

  // const [contacts, setContacts] =  useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
  // const [filter, setFilter] = useState('');


  // const addContact = ({ name, number }) => {
  //   const normalizedName = name.toLowerCase();

  //     const checkContact = contacts.some(contact => contact.name.toLowerCase() === normalizedName);

  //   if (checkContact) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
   
  //   const contact = {
  //     id: nanoid(),
  //     name: name,
  //     number: number,
  //   };

  //   setContacts(prev => [...prev, contact])
  // };


  // const getSearchingContacts = () => {
  //   const lowerNorm = filter.toLowerCase();
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(lowerNorm));
  // };

  // const handleChange = evt => {
  //   setFilter(evt.currentTarget.value );
  // };


  // const deleteContact = id =>
  //   setContacts(prev => prev.filter(contact => contact.id !== id)
  //   );

   
  //   useEffect(()=>{
  //     localStorage.setItem('contacts', JSON.stringify(contacts))
  //   }, [contacts])

    return (
      <div className="div">
        <ContactForm />
        <h2 className="contactsTitle">Contacts</h2>
        <ContactList />
        <Filter />
      </div>
    );
  
};

export default App;
