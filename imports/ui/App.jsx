import React from "react";
import ContactForm from "./ContactForm.jsx";
import ContactList from "./ContactList.jsx";
import Header from "./Header.jsx";

export const App = () => (
  <div>
    <Header />
    <div id="wrapper">
      <ContactForm />
      <ContactList />
    </div>
  </div>
);
