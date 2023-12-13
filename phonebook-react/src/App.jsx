import React, { useState } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const addContact = () => {
    setContacts([...contacts, { name, phoneNumber }]);
    setName('');
    setPhoneNumber('');
  };

  const searchContact = (searchName) => {
    const foundContact = contacts.find((contact) => contact.name === searchName);
    if (foundContact) {
      alert(`Contact found!\nName: ${foundContact.name}\nPhone Number: ${foundContact.phoneNumber}`);
    } else {
      alert('Contact not found.');
    }
  };

  const displayContacts = () => {
    if (contacts.length === 0) {
      alert('Phonebook is empty.');
    } else {
      const contactList = contacts.map((contact, index) => (
        `#${index + 1}: Name: ${contact.name}, Phone Number: ${contact.phoneNumber}`
      )).join('\n');
      alert(`Contacts in the phonebook:\n${contactList}`);
    }
  };

  return (
    <div className="App">
      <h1>Phonebook App</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={addContact}>Add Contact</button>
      <button onClick={() => searchContact(prompt('Enter contact name to search:'))}>Search Contact</button>
      <button onClick={displayContacts}>Display Contacts</button>
    </div>
  );
}

export default App;
