import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true
    },
    label: {
        type: String
    }
});
  
const phoneNumberSchema = new mongoose.Schema({
    country: {
        type: String, 
        default: 'us'
    },
    phoneNumber: { 
        type: String, 
        required: true
    },
    label: {
        type: String
    }
});
  

const contactSchema = new mongoose.Schema({
    avatar: {
        type: String,
        default: null
    },
    background: {
        type: String,
        default: null
    },
    name: {
        type: String,
        default: ""
    },
    emails: [emailSchema],
    phoneNumbers: [phoneNumberSchema],
    title: {
        type: String,
        default: ""
    },
    company: {
        type: String,
        default: ""
    },
    birthday: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default: ""
    },
    notes: {
        type: String,
       default: ""
    },
    tags: {
        type: [String],
        default: []
    },
}, 
{
    timestamps: true,
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;