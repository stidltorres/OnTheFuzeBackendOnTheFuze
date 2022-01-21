const mongoose = require('mongoose');
const user='test2';
const password='qE7TVQ4iKsCDPrsG';
const dbname='developer_test_2'
const uri=`mongodb+srv://${user}:${password}@cluster0.n0ofk.mongodb.net/${dbname}?retryWrites=true&w=majority`;

class Database {
    constructor(){
        this.mongoDataBase();
    }

    mongoDataBase(){
        this.conection = mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Connection made with success");
        }).catch((error)=>{
            console.log(`Error: ${error}`);
        })
    }

}

module.exports = new Database();