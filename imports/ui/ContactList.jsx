import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { useSubscribe, useFind } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

const ContactList = () => {
  const isLoading = useSubscribe("allContacts");
  const contacts = useFind(() => ContactsCollection.find({}, { sort: { createdAt: -1 } }));

  // const contacts = useTracker(() => {
  //   return ContactsCollection.find({}, { sort: { createdAt: -1 } }).fetch();
  // });

  const removeContact = (e, _id) => {
    e.preventDefault();
    Meteor.call("contactRemove", { contactId: _id });
  };

  if (isLoading()) {
    return <h2>Loading...</h2>;
  }

  return (
    <div id="contact-list">
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.email}>
            <img src={contact.imageURL}></img>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <a href="#" onClick={(e) => removeContact(e, contact._id)}>
              Remove contact
            </a>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
