const express = require('express')
const app = express()
const bodyParser= require('body-parser')

const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

const MongoClient = require('mongodb').MongoClient
const connectionString = "mongodb+srv://testMongo:yaarmaranakaro@cluster0.2jkl2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(connectionString, {
  useUnifiedTopology: true
}, (err, client) => {
  if (err) return console.error(err)
  console.log('Connected to Database')

  const db = client.db('star-wars-quotes')
  const quotesCollection = db.collection('quotes')

  quotesCollection.insertOne({gg: "ez"})
    .then(result => {
      console.log(result)
    })
    .catch(error => console.error(error))

})
app.post('/quotes', (req, res) => {
  console.log(req.body)
})

app.get('/', (req, res) => {
  // const collection = client.db("test").collection("devices");
  // // perform actions on the collection object
  // collection.insertOne({gg: "ez"})
  // .then(res => console.log("gg"))
  // .catch(err => console.log("ez", err))
  res.sendFile(__dirname + '/index.html')
  // Note: __dir name is the current directory you're in. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// client.close();