const express = require('express');
const { MongoClient } = require('mongodb');
const { setUsersCollection } = require('./Database/User');
const {setWebsitesCollection } = require('./Database/Websites')
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const databaseUrl = 'mongodb+srv://aravindroy1709:2Z5GZej0oAJaOnFr@kukku-cluster-0.exbhgte.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(databaseUrl);
const userRoutes = require('./Routes/userRoutes')
const websiteRoutes = require('./Routes/websiteRoutes')

app.use(cors()); 
app.use(bodyParser.json());

async function main() {
  try {
    await client.connect();
    console.log('Connected successfully to Database');
    
    setUsersCollection(client);
    setWebsitesCollection(client);
    
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (e) {
    console.error('Failed to connect to the database', e);
    process.exit(1);
  }
}

app.use('/users' , userRoutes)
app.use('/websites' , websiteRoutes)

main();


