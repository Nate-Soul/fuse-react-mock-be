import Contact from "../models/contact.model.js";

const findContactByID = async (req) => {
    const contactId = req.params.id;
    const contact = await Contact.findById(contactId);
    return contact;
}

//create new contact logic goes here
export const createContactService = async (req) => {
    //comments below are for an ideal case where i'm certain of the parameters to work with.
    //extract parameters from req.body to ascertain you're getting the right fields.
    const newContact = new Contact(req.body);
    //check if contact already exist before saving to database.
    const savedContact = await newContact.save();
    return savedContact;
};

//fetch all contacts logic goes here
export const getContactsService = async () => {
    const contacts = await Contact.find();
    return contacts;
};

//fetch single contact by ID logic goes here
export const getContactService = async (req) => {
    return findContactByID(req);
};

//edit single contact by ID logic goes here
export const editContactService = async (req) => {
    return findContactByID(req);
};

//delete single contact by ID logic goes here
export const deleteContactService = async (req) => {
    return findContactByID(req);
};