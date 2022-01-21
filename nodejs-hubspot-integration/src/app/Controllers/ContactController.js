const Yup = require('yup');
const Contact = require('../Models/Contact');
const axios = require('axios');
const { hapikey } = require('../../config/config');

class ContactController {

    async show(req, res) {
        console.log("Function show accessed");
    }

    async showAll(req, res) {
        console.log("ShowAll function accessed");
    }

    async update(req, res) {
        console.log("Function update accessed");
    }

    async store(req, res) {

        //Data validation with Yup
        const schema = Yup.object().shape({
            
            first_name: Yup.string().required().min(3),
            last_name: Yup.string().required().min(3),
            document_id: Yup.string().required().min(10)
        });

        if(!(await schema.isValid(req.body))){
            return res.status(402).json({
                error: true,
                message: "Invalid data"
            })
        }

        //Receiving the information no body
        const {first_name, last_name, document_id } = req.body;

        //Send to or Hubspot
        axios({
            method: 'post',
            url: `https://api.hubapi.com/contacts/v1/contact/createOrUpdate/lastname/${last_name}/?hapikey=${hapikey}`,
            data: {
                "properties": [
                    
                    { "property": "first_name", "value": first_name },
                    { "property": "last_name", "value": last_name },
                    { "property": "document_id", "value": document_id }
                ]
            }
        })
        .then((response) => {
            console.log("Contact registered successfully");
        })
        .catch((error) =>{
            console.log("Error registering user")
            console.log(error);
        })

        //building constant
        const dados = {
            
            first_name,
            last_name,
            document_id
        }

        //Send to database
        const contact = await Contact.create(dados, (err) => {
            if(err) res.status(402).json({
                    error: true,
                    message: "Unable to register contact"
                })

            return res.status(200).json({
                error: false,
                message: "Contact registered successfully",
                contact
            })
        })
        

    }

    async remove(req, res) {
        console.log("Function remove accessed");
    }



}

module.exports = new ContactController();