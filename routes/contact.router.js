import express from "express";
import { 
    createContact,
    getContacts,
    getContact,
    editContact,
    deleteContact
} from "../controllers/contact.controller.js";


const router = express.Router();

router.post("/", createContact);
router.get("/", getContacts);
router.route("/:id")
    .get(getContact)
    .put(editContact)
    .delete(deleteContact);

export default router;