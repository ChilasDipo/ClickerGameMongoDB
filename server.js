const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes");
const indexRouter = require('./routes/index');
const javaRouter = require('./routes/JSRoute');
const cssRouter = require('./routes/CSSRouter');

//const saveOnServerRoute = require('./routes/saveOnServer')

const app = express();
app.use(express.urlencoded({ extended: true}))
app.use(express.json());


const { MongoClient } = require('mongodb');
const { collection } = require("./models/food");
const uri = "mongodb+srv://admin:Password@cluster0.vp0pp.mongodb.net/ClickerGame?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Connected" + collection.dbName)
  


  
  client.close();
});

var money = 0
var level = 1
var priceForLevel=10



app.post('/clicked',express.json({type: '*/*'}), (req,res) => {
  console.log(res.json(req.body))
  console.log(req.body)
  console.log(req.body)
  console.log("Clicked")
  res.send({
    "Folk": [{
      "name": "Gustav",
      "age": "old",
      "height": "Tall"
    }, {
      "name": "Chilas",
      "age": "Less Old",
      "height": "Less Tall"
    },{
      "name": "TallBoy",
      "age": "Not Old",
      "height": "Tallest"
    }]
  })
    
 // let arrayForData = [money+parseInt(req.body),level,priceForLevel]
  //let arrayJSON = JSON.stringify(arrayForData)
  //console.log(arrayJSON)
})
app.post('/levelUp', (req,res) => {
  if(money>priceForLevel){
    level = level + 1
    money= money-priceForLevel
    priceForLevel= priceForLevel + 2
}
})
app.get('/data', (req,res) => {
  
  res.send(arrayJSON)
})


app.use(indexRouter)
app.use(foodRouter);
app.use(javaRouter)
app.use(cssRouter)

app.listen(3000, () => {
  console.log("Server is running...");
});