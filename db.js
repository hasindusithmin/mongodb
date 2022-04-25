
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://sithmin404:${process.env.PASSWORD}@cloudmania.dziv1.mongodb.net/blogger?retryWrites=true&w=majority`;
let dbConnection;
module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then(client => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err=>{
                console.log(err);
                return cb(err)
            })
    },
    getDb: ()=>dbConnection
}


