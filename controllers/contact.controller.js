import { 
    createContactService,
    getContactsService,
    getContactService,
    editContactService,
    deleteContactService
} from "../services/contact.services.js";


//create new contact logic goes here
export const createContact = async (req, res) => {
    try {
        const createdContact = await createContactService(req);
        res.status(201).json(createdContact);
    } catch (err) {
        console.log(err.message);
    }
};

//fetch all contacts logic goes here
export const getContacts = async (req, res) => {
    try {
        const allContacts = await getContactsService(req);
        res.status(200).json(allContacts);
    } catch (err) {
        console.log(err.message);
    }
};

//fetch single contact by ID logic goes here
export const getContact = async (req, res) => {
    try {
        const contact = await getContactService(req);
        res.status(200).json(contact);
    } catch (err) {
        console.log(err.message);
    }
};

//edit single contact by ID logic goes here
export const editContact = async (req, res) => {
    try {
        const editedContact = await editContactService(req);
        res.status(200).json(editedContact);
    } catch (err) {
        console.log(err.message);
    }
};

//delete single contact by ID logic goes here
export const deleteContact = async (req, res) => {
    try {
        const createdContact = await deleteContactService(req);
        res.status(404).json(createdContact);
    } catch (err) {
        console.log(err.message);
    }
};