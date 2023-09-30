

/*  Use Database  */
use("databaseName");


/*  create a new collection  */
db.createCollection('users');



/*  delete/remove collection  */
db.users.drop();



/*   insert single document to the collection   */
db.users.insertOne({
    name:"Gourob",
    age:24,
    city:"Sylhet",
    position:"SDE",
    salary:85000
})



/*   delete/remove single document from the collection   */
db.users.deleteOne({
    _id: ObjectId("651881067a7ed17cf267c136")
})
