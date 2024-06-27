import Contact from "../models/contact.model.js";
import { 
    createContactService,
    getContactsService,
    getContactService,
    editContactService,
    deleteContactService
} from "../services/contact.services.js";

// const devMode = process.env.SERVER_ENV === "DEVELOPMENT";

//create new contact
export const createContact = async (req, res) => {
    try {
        const createdContact = await createContactService(req);
        res.status(201).json(createdContact);
        if (process.env.SERVER_ENV === "DEVELOPMENT") {
            console.log(`${req.method}: ${res.statusCode} | New Contact Created!`);
        }
    } catch (err) {
        res.status(400);
        console.log(err.message);
    }
};

//get all contacts
export const getContacts = async (req, res) => {
    try {
        const allContacts = await getContactsService();
        res.status(200).json(allContacts);
        if (process.env.SERVER_ENV === "DEVELOPMENT") {
            console.log(`${req.method}: ${res.statusCode} | Fetched all contacts successfully!`);
        }
    } catch (err) {
        res.status(400);
        console.log(err.message);
    }
};

//get single contact by ID
export const getContact = async (req, res) => {
    try {
        const contact = await getContactService(req);
        if(contact) {
            res.status(200).json(contact);
        } else {
            res.status(404);
            throw new Error("Contact Not Found!");
        }
    } catch (err) {
        res.status(400);
        console.log(err.message);
    }
};

//edit single contact by ID
export const editContact = async (req, res) => {
    try {
        const contact = await editContactService(req);
        if (contact) {
            //An alternative would be extracting all model fields and updating only changed params manually
            //something in this regard below
            //contact.name = req.
            const updatedContact = await Contact.findByIdAndUpdate(
                req.params.id, 
                {$set: req.body}, 
                {new: true}
            );
            res.status(200).json(updatedContact);
        } else {
            res.status(404);
            throw new Error("Contact Not Found!");
        }
    } catch (err) {
        res.status(400);
        console.log(err.message);
    }
};

//delete single contact by ID
export const deleteContact = async (req, res) => {
    try {
        const contact = await deleteContactService(req);
        if (contact) {
            await Contact.deleteOne({_id: contact._id});
            res.status(204).json({"detail": contact.name + "'s credentials has been deleted"});
        } else {
            res.status(404);
            throw new Error("Contact Not Found!");
        }
    } catch (err) {
        res.status(400);
        console.log(err.message);
    }
};