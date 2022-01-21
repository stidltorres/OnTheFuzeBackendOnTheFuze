1. You need to install the following dependencies through the terminal:
npm i axios
npm i @hubspot/api-client
npm install mongoose
npm install express --save
npm install nodemon -D
npm install cors
npm i morgan
npm i yup
npm i mongodb
npm install nodemon -g
npm i mongoose-paginate-v2
2. to run the api, type the following line in the terminal: nodemon server.js
D:\nodejs-hubspot-integration> nodemon server.js
you can use postman to test the api or you can also open the index.html file (Frontend of the api).
3.I had a problem with the post method and the url, I tried to read the documentation and check forums where I got the following answer (but this answer did not work for me): `https://api.hubapi.com/contacts/v1/contact/createOrUpdate/lastname/${last_name}/?hapikey=$${hapikey}` .
Note: I use mongo-db as web-hosted database engine