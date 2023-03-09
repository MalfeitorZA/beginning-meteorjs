import { ContactsCollection } from "./ContactsCollection";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

Meteor.methods({
  insertContact({ name, email, imageURL }) {
    check(name, String);
    check(email, String);
    if (!name || !email) {
      throw new Meteor.Error("Name and email are required");
    }
    return ContactsCollection.insert({ name, email, imageURL, createdAt: new Date() });
  },
  contactRemove({ contactId }) {
    check(contactId, String);
    return ContactsCollection.remove(contactId);
  },
});
