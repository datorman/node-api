// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient,ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.getTimestamp())
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL,{useNewUrlParser: true}, (err, client) => {
    if(err){
        return console.log('Unable to connect to db');
    }
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Mike',
    //     age: 29
    // }, (err, result) => {
    //     if(err){
    //         return console.log('unable to insert user')
    //     }
    //     console.log(result.ops)
    // });

    // db.collection('users').insertMany([
    //     {
    //         name:'Mike2',
    //         age: 22
    //     },{
    //         name:'Mike3',
    //         age:30
    //     }
    // ], (er,res) => {
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log(res.ops)
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description:'descrip1',
    //         completed: false
    //     },{
    //         description:'descrip2',
    //         completed: true
    //     },{
    //         description:'descrip3',
    //         completed:true
    //     }
    // ], (err,res ) =>{
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log(res.ops)
    // })
    // db.collection('users').findOne({name:'Mike'}, (err,res) => {
    //     if(err){
    //         return console.log('something went wrong')
    //     }
    //     console.log(res)
    // })
    // db.collection('users').find({name:'Mike'}).toArray((err,res) => {
    //     console.log(res)
    // })
    // const updatePromise = db.collection('users').updateOne(
    //     {
    //         _id: new ObjectID("5cd40789ec93a11dd47fafc5")
    //     },
    //     {
    //         $set:{
    //             name:'bob'
    //         }
    //     }
    // )

    // updatePromise.then((result) => {
    //     console.log(result)
    // })
});