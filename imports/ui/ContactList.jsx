import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { useTracker } from "meteor/react-meteor-data";

const ContactList = () => {
  const contacts = useTracker(() => {
    return ContactsCollection.find({}).fetch();
  });

  return (
    <>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.email}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
