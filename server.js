//Imports
const express = require ('express');
const mongoose = require  ('mongoose');
const taskRoutes = require('./routes.js')

//Create Express AND MIDDLEWARE
const app = express();
app.use (express.json());

//Constants
const mongoUri = 'mongodb://localhost:27017/taskdb';
const PORT = 3000;

//MongoDB connection
mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => console.log('connected to MongoDB'))
  .catch(err => console.error('MongoDb connection error:', err));

  //Use Task routes 
  app.use('/', taskRoutes);


  //Fire up the server 
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});
