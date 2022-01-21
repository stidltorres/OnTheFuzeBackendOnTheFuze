const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const Contact = new mongoose.Schema({
    
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    document_id: { type: String, required: true }
},
{
    timestamps: true,
});

Contact.plugin(mongoosePaginate);

module.exports = mongoose.model("Contact", Contact);

