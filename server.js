const express = require("express");
const mongoose = require("mongoose");
const indexRouter = require('./routes/index');
const javaRouter = require('./routes/JSRoute');
const cssRouter = require('./routes/CSSRouter');
const ObjectId = require('mongodb').ObjectId;

const app = express();
app.use(express.json());

let money = 0
let level = 1
let priceForLevel=10

const { MongoClient } = require('mongodb');
const { collection } = require("./models/food");
const url = "mongodb+srv://admin:Password@cluster0.vp0pp.mongodb.net/ClickerGame?retryWrites=true&w=majority";
const client = new MongoClient(url);

 // The database to use

 const dbName = "users";                 

 async function run(name) {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);
         const col = db.collection("data");
         const myDoc = await col.findOne({"name" : name});
        money = myDoc.data[0]
        level = myDoc.data[1]
        priceForLevel = myDoc.data[2]
         console.log(myDoc);
         return myDoc
        } catch (err) {
         console.log(err.stack);
     }
     finally {
      
        await client.close();
       
    }

}
//let name = "user1"

//run()

app.post('/loadUser', (req,res) => {
console.log(req.body)
console.log(req.body.user.name)
run(req.body.user.name)
  arrayJSON = JSON.stringify({money,level,priceForLevel}) 
   console.log("then")
  res.send(arrayJSON)  

 
})

app.post('/clicked', (req,res) => {
  money = money + 1
  arrayJSON = JSON.stringify({money,level,priceForLevel})
  res.send(arrayJSON)   

})
app.post('/levelUp', (req,res) => {
  if(money>priceForLevel){
    level = level + 1
    money= money-priceForLevel
    priceForLevel= priceForLevel + 2
    arrayJSON = JSON.stringify({money,level,priceForLevel})
    res.send(arrayJSON)  
}
})
app.post('/reset', (req,res) => {
  money = 0
  level = 1
  priceForLevel = 10
  arrayJSON = JSON.stringify({money,level,priceForLevel})
  res.send(arrayJSON)  
})

app.post('/save', (req,res) => {
save(req.body.user.name)
})

//setInterval(() => {
 // save()
//}, 20000);

async function save(username){  
  try {

    await client.connect();

    console.log("Connected correctly to server");

    const db = client.db(dbName);

    // Use the collection "data"

    const col = db.collection("data");

    // Construct a document                                                                                                                                                              

    let savedata = {
        "name": username ,                                                                                                                               
        "data": [ money, level, priceForLevel ],
    }

    // Insert a single document, wait for promise so we can read it back

    //const p = await col.insertOne(savedata);

    // Find one document
    await col.replaceOne({"name" : username},savedata);
    
    // set values to thoses from database


   } catch (err) {

    console.log(err.stack);

}



finally {
   await client.close();
}

}


app.use(indexRouter)
app.use(javaRouter)
app.use(cssRouter)

app.listen(3000, () => {
  console.log("Server is running...");
});