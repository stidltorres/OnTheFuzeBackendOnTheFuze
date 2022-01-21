const { Router } = require('express');

const Validation = require("./app/Midlewares/Validation")

const ContactController = require('./app/Controllers/ContactController');

const routes = new Router();

routes.get('/', Validation, ContactController.showAll);
routes.get('/contact',  ContactController.show);
routes.post('/contact', ContactController.store);
routes.put('/contact/:id', ContactController.update);
routes.delete('/contact/:id', ContactController.remove);


module.exports = routes;