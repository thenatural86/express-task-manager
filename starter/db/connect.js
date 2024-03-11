const mongoose = require('mongoose')

const connectionString =
  'mongodb+srv://philip:4ahxe.YAy-nDAfw@nodeexpressprojects.9b0ytip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&appName=NodeExpressProjects'

const connectDB = (url) => {
  return mongoose.connect(connectionString)
}

module.exports = connectDB

// .then(() => console.log('connected to the DB...'))
// .catch((error) => console.log(error))
