import React, { useState } from "react";
import { ContactsCollection } from "../api/ContactsCollection";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageURL, setImageURL] = useState("");

  const SaveContact = () => {
    console.log({ name, email, imageURL });
    ContactsCollection.insert({ name, email, imageURL });
    setName("");
    setEmail("");
    setImageURL("");
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input value={name} id="name" type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input value={email} id="email" type="email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL</label>
        <input value={imageURL} id="imageUrl" type="text" onChange={(e) => setImageURL(e.target.value)} />
      </div>
      <div>
        <button onClick={SaveContact}>Save Contact</button>
      </div>
    </form>
  );
};

export default ContactForm;
