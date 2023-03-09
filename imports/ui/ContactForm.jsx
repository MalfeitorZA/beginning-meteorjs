import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import ErrorAlert from "./ErrorAlert";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [err, setErr] = useState("");

  const SaveContact = () => {
    Meteor.call("insertContact", { name, email, imageURL }, (errorresponse) => {
      if (errorresponse) {
        console.log(errorresponse);
        setErr(errorresponse.error);
      } else {
        setName("");
        setEmail("");
        setImageURL("");
      }
    });
  };

  return (
    <form id="contact-form">
      <ErrorAlert message={err} />
      <div>
        <label htmlFor="name">Name: </label>
        <input value={name} id="name" type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input value={email} id="email" type="email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL: </label>
        <input value={imageURL} id="imageUrl" type="text" onChange={(e) => setImageURL(e.target.value)} />
      </div>
      <div>
        <button onClick={SaveContact}>Save Contact</button>
      </div>
    </form>
  );
};

export default ContactForm;
