const mongoose = require('mongoose')

// const connectionString =

const connectDB = (url) => {
  return mongoose.connect(url)
}

module.exports = connectDB

// .then(() => console.log('connected to the DB...'))
// .catch((error) => console.log(error))
